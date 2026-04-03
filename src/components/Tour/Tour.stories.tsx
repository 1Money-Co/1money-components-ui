import React, { useState, useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Tour } from './index';
import { Button } from '@/components/Button';

import '../CoachMark/style';
import '../Button/style';

const meta: Meta<typeof Tour> = {
  title: 'Components/Tour',
  component: Tour,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tour>;

/** Basic usage */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const uploadRef = useRef<HTMLButtonElement>(null);
    const saveRef = useRef<HTMLButtonElement>(null);
    const moreRef = useRef<HTMLButtonElement>(null);

    return (
      <div>
        <Button color="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginTop: 40, width: 500 }}>
          <div style={{ alignSelf: 'flex-start' }}>
            <Button ref={uploadRef} variant="text">Upload</Button>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Button ref={saveRef} color="primary">Save</Button>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
            <Button ref={moreRef} variant="text">···</Button>
          </div>
        </div>

        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            {
              target: uploadRef,
              placement: 'bottom',
              heading: 'Upload File',
              body: 'Click to upload your files.',
            },
            {
              target: saveRef,
              placement: 'bottom',
              heading: 'Save',
              body: 'Save your changes.',
            },
            {
              target: moreRef,
              placement: 'bottom',
              heading: 'More',
              body: 'Click for more options.',
            },
          ]}
        />
      </div>
    );
  },
};
