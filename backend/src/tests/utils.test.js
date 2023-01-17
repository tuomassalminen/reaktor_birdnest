const { addDistanceToDrones, getIllegalDrones } = require('../utils');

const testDrones = [
  {
    serialNumber: ['1'],
    positionY: ['250000'],
    positionX: ['250000'],
  },
  {
    serialNumber: ['2'],
    positionY: ['400000'],
    positionX: ['250000'],
  },
  {
    serialNumber: ['3'],
    positionY: ['250000'],
    positionX: ['300000'],
  },
];

describe('addDistanceToDrones', () => {
  test('returns drones with distances added to them', () => {
    expect(addDistanceToDrones(testDrones)).toEqual([
      {
        serialNumber: ['1'],
        positionY: ['250000'],
        positionX: ['250000'],
        distanceToOrigin: 0,
      },
      {
        serialNumber: ['2'],
        positionY: ['400000'],
        positionX: ['250000'],
        distanceToOrigin: 150000,
      },
      {
        serialNumber: ['3'],
        positionY: ['250000'],
        positionX: ['300000'],
        distanceToOrigin: 50000,
      },
    ]);
  });
});

const testDistanceDrones = [
  {
    serialNumber: ['1'],
    distanceToOrigin: 100000,
  },
  {
    serialNumber: ['2'],
    distanceToOrigin: 50000,
  },
  {
    serialNumber: ['3'],
    distanceToOrigin: 200000,
  },
  {
    serialNumber: ['4'],
    distanceToOrigin: 100001,
  },
  {
    serialNumber: ['5'],
    distanceToOrigin: 0,
  },
  {
    serialNumber: ['6'],
    distanceToOrigin: 99999,
  },
];

describe('getIllegalDrones', () => {
  test('returns drones within the illegal zone correctly 1', () => {
    const illegalDrones = getIllegalDrones(testDistanceDrones);
    expect(illegalDrones).toHaveLength(4);
    expect(illegalDrones).toEqual([
      {
        serialNumber: ['1'],
        distanceToOrigin: 100000,
      },
      {
        serialNumber: ['2'],
        distanceToOrigin: 50000,
      },
      {
        serialNumber: ['5'],
        distanceToOrigin: 0,
      },
      {
        serialNumber: ['6'],
        distanceToOrigin: 99999,
      },
    ]);
  });
});
