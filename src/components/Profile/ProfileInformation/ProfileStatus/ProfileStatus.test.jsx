import { create } from 'react-test-renderer';
import React from 'react';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status ="Hello, World!"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello, World!");

  });

  test("after creation '<span>' should be displayed", () => {
    const component = create(<ProfileStatus status="Hello, World!"/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).toBeDefined();
  });

    test("after creation '<input>' should not be displayed", () => {
      const component = create(<ProfileStatus status="Hello, World!" />);
      const root = component.root;
      expect(() => {
        let input = root.findByType("input");
      }).toThrow();

    });

  test("after creation '<span>' should contain correct text", () => {
    const component = create(<ProfileStatus status="Hello, World!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[1]).toBe("Hello, World!");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus
        status="Hello, World!"
        updateProfileStatus={mockCallback}
      />
    );
    const instance = component.getInstance();

    instance.deactiveEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
})