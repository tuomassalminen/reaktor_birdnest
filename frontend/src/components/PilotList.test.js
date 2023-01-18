import PilotList from './PilotList.svelte';
import { render } from '@testing-library/svelte';

const testPilots = [
  {
    id: 1,
    email: 'testpilot1@email.com',
    firstName: 'testpilot1',
    phoneNumber: 'testnumber1',
    latestViolation: '2023-01-18T14:49:24.145Z',
    closestDroneDistance: 20000,
  },
  {
    id: 2,
    email: 'testpilot2@email.com',
    firstName: 'testpilot2',
    phoneNumber: 'testnumber2',
    latestViolation: '2023-01-18T14:39:24.145Z',
    closestDroneDistance: 40000,
  },
  {
    id: 3,
    email: 'testpilot3@email.com',
    firstName: 'testpilot3',
    phoneNumber: 'testnumber3',
    latestViolation: '2023-01-18T14:59:24.145Z',
    closestDroneDistance: 10000,
  },
];

describe('PilotList', () => {
  it('shows a list of the pilots', async () => {
    const component = render(PilotList, {
      pilots: testPilots
    });

    expect(component.getByText('testpilot1')).toBeDefined();
    expect(component.getByText('testpilot1@email.com')).toBeDefined();
    expect(component.getByText('testnumber1')).toBeDefined();
    expect(component.getByText('20.00 m')).toBeDefined();
    expect(component.getByText('16:49:24')).toBeDefined();
    expect(component.getByText('testpilot2')).toBeDefined();
    expect(component.getByText('testpilot3')).toBeDefined();
  });
});