import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Grid, Row, Col } from '../index';
import { GRID_CSS_VARS, GRID_ROW_PREFIX, GRID_ALIGN, GRID_JUSTIFY } from '../constants';

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (message, ...optionalParams) => {
      const errorMessage = typeof message === 'string' ? message : String(message);
    if (
      typeof message === 'string' &&
      (
        errorMessage.includes('Could not parse CSS stylesheet') ||
        errorMessage.includes('findDOMNode is deprecated and will be removed')
      )
    ) {
      return;
    }
    originalConsoleError(message, ...optionalParams);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('Grid', () => {
  it('renders row/col with gutter + alignment', () => {
    const OM_PREFIX = 'om-react-ui';
    const ROW_CLASS = `${OM_PREFIX}-${GRID_ROW_PREFIX}`;
    const GUTTER_X = 16;
    const GUTTER_Y = 8;
    const SPAN_HALF = 6;

    const { container } = render(
      <Grid gutter={[GUTTER_X, GUTTER_Y]} justify={GRID_JUSTIFY.spaceBetween} align={GRID_ALIGN.middle}>
        <Grid.Col span={SPAN_HALF}>Left</Grid.Col>
        <Grid.Col span={SPAN_HALF}>Right</Grid.Col>
      </Grid>
    );

    const row = container.querySelector(`.${ROW_CLASS}`);
    expect(row).not.toBeNull();
    expect(row).toHaveStyle(`${GRID_CSS_VARS.gutterX}: ${GUTTER_X}px`);
    expect(row).toHaveStyle(`${GRID_CSS_VARS.gutterY}: ${GUTTER_Y}px`);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders responsive classes', () => {
    const SPAN_BASE = 12;
    const SPAN_SM = 6;
    const SPAN_MD = 4;
    const OFFSET_MD = 2;
    const SPAN_LARGE = 3;
    const ORDER_LARGE = 1;
    const PUSH_COL = 1;
    const PULL_COL = 1;
    const GUTTER = 8;

    const { container } = render(
      <Row gutter={GUTTER}>
        <Col
          span={SPAN_BASE}
          sm={SPAN_SM}
          md={{ span: SPAN_MD, offset: OFFSET_MD }}
          lg={{ span: SPAN_LARGE, order: ORDER_LARGE }}
          push={PUSH_COL}
          pull={PULL_COL}
        />
      </Row>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('keeps Grid.Col rendered when span is 0', () => {
    const { getByTestId, container } = render(
      <Grid>
        <Grid.Col span={0} data-testid="grid-col-zero">Zero Span</Grid.Col>
      </Grid>
    );

    const col = getByTestId('grid-col-zero');
    const row = container.firstElementChild;

    expect(row).not.toBeNull();
    expect(col).toBeInTheDocument();
    expect(col).toHaveTextContent('Zero Span');
    expect(col.className).toContain('grid-col');
    expect(col.className).toContain('grid-col-0');
  });
});
