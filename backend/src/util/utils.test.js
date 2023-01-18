const { getIllegalDrones } = require('./utils');

const testDrones1 = [
  {
    serialNumber: ['1'],
    positionY: ['340520'],
    positionX: ['50000'],
  },
  {
    serialNumber: ['2'],
    positionY: ['45620'],
    positionX: ['12450'],
  },
  {
    serialNumber: ['3'],
    positionY: ['500000'],
    positionX: ['500000'],
  },
  {
    serialNumber: ['4'],
    positionY: ['250000'],
    positionX: ['250000'],
  },
  {
    serialNumber: ['5'],
    positionY: ['300000'],
    positionX: ['200000'],
  },
  {
    serialNumber: ['6'],
    positionY: ['200000'],
    positionX: ['300000'],
  },
  {
    serialNumber: ['7'],
    positionY: ['250000'],
    positionX: ['0'],
  },
];

describe('getIllegalDrones', () => {
  test('getIllegalDrones returns drones within the illegal zone correctly 1', () => {
    const illegalDrones = getIllegalDrones(testDrones1);
    expect(illegalDrones).toHaveLength(3);
    expect(illegalDrones[0].serialNumber[0]).toEqual('4');
    expect(illegalDrones[1].serialNumber[0]).toEqual('5');
    expect(illegalDrones[2].serialNumber[0]).toEqual('6');
  });

  const testDrones2 = [
    {
      serialNumber: ['1'],
      positionY: ['0'],
      positionX: ['0'],
    },
    {
      serialNumber: ['2'],
      positionY: ['280000'],
      positionX: ['0'],
    },
    {
      serialNumber: ['3'],
      positionY: ['190000'],
      positionX: ['270000'],
    },
    {
      serialNumber: ['4'],
      positionY: ['0'],
      positionX: ['280000'],
    },
    {
      serialNumber: ['5'],
      positionY: ['350000'],
      positionX: ['250000'],
    },
    {
      serialNumber: ['6'],
      positionY: ['250000'],
      positionX: ['350000'],
    },
    {
      serialNumber: ['7'],
      positionY: ['50000'],
      positionX: ['10000'],
    },
  ];

  test('getIllegalDrones returns drones within the illegal zone correctly 2', () => {
    const illegalDrones = getIllegalDrones(testDrones2);
    expect(illegalDrones).toHaveLength(3);
    expect(illegalDrones[0].serialNumber[0]).toEqual('3');
    expect(illegalDrones[1].serialNumber[0]).toEqual('5');
    expect(illegalDrones[2].serialNumber[0]).toEqual('6');
  });
});