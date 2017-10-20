import { Person } from './index';

describe('Person', () => {
  it('should be defined', () => {
    expect(Person).toBeDefined();
  });

  it('should crete a person with a name', () => {
    const testPerson = new Person('testName', 10);

    expect(testPerson.getName()).toBe('testName');
  });
});
