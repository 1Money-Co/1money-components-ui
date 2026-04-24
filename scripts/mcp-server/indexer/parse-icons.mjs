/**
 * parse-icons.mjs
 *
 * Extracts icon names from the IconList object literal in Icons.tsx.
 * Uses TypeScript AST parsing to find the IconList variable declaration
 * and extract all property keys.
 */

import ts from 'typescript';
import fs from 'fs/promises';
import path from 'path';

/**
 * Extract all icon names from the IconList object in Icons.tsx.
 *
 * @param {Object} options
 * @param {string} options.repoRoot - Repository root directory
 * @returns {Promise<Array<{ name: string }>>} - Sorted array of icon records
 * @throws {Error} If IconList cannot be found or parsed
 */
export async function parseIcons({ repoRoot }) {
  if (!repoRoot) throw new Error('parseIcons: repoRoot is required');

  const iconsPath = path.join(repoRoot, 'src', 'components', 'Icons', 'Icons.tsx');
  const source = await fs.readFile(iconsPath, 'utf8');

  // Parse the TypeScript file
  const sourceFile = ts.createSourceFile(
    iconsPath,
    source,
    ts.ScriptTarget.Latest,
    true,
  );

  const iconNames = [];

  // Walk the AST to find the IconList variable declaration
  function visit(node) {
    // Look for: const IconList = { ... } as const;
    if (ts.isVariableDeclaration(node) && node.name.text === 'IconList') {
      let objectLiteral = null;

      if (node.initializer) {
        // Direct object literal: const IconList = { ... };
        if (ts.isObjectLiteralExpression(node.initializer)) {
          objectLiteral = node.initializer;
        }
        // As expression: const IconList = { ... } as const;
        else if (ts.isAsExpression(node.initializer)) {
          const expr = node.initializer.expression;
          if (ts.isObjectLiteralExpression(expr)) {
            objectLiteral = expr;
          }
        }
      }

      // If we found the object literal, extract all property keys
      if (objectLiteral) {
        for (const prop of objectLiteral.properties) {
          let key = null;

          if (ts.isPropertyAssignment(prop) || ts.isShorthandPropertyAssignment(prop)) {
            const nameNode = prop.name;

            // Handle Identifier (unquoted keys like: chevronDown: ... or chevronDown)
            if (ts.isIdentifier(nameNode)) {
              key = nameNode.text;
            }
            // Handle StringLiteral (quoted keys like: "chevron-down": ...)
            else if (ts.isStringLiteral(nameNode)) {
              key = nameNode.text;
            }
            // Handle ComputedPropertyName [expr] — skip these
            else if (ts.isComputedPropertyName(nameNode)) {
              // Skip computed property names
              key = null;
            }

            if (key) {
              iconNames.push(key);
            }
          }
        }
      }
    }

    // Continue traversing
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (iconNames.length === 0) {
    throw new Error(
      `Failed to extract icon names from ${iconsPath}: IconList not found or has no properties`,
    );
  }

  // Remove duplicates (comments can cause some duplication)
  const uniqueNames = Array.from(new Set(iconNames));

  // Sort ascending by name (ASCII order)
  uniqueNames.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  // Convert to record format
  const records = uniqueNames.map(name => ({ name }));

  return records;
}
