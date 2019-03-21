import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';
import TextInput from './TextInput';

function getUserInfo(args) {
  const defaultUserInfo = {
      username: '',
      password: '',
      submitted: false
  };

  return {
    ...defaultUserInfo,
    ...args
  };
}

describe("<LoginPage />", () => {

    it("should contain <TextInput />", () => {
        // const wrapper = shallow(<LoginPage loggingIn = "true"/>);
        //
        // expect(wrapper.find(TextInput).length).toEqual(1);
    });

    // it("calls saveFuelSavings upon clicking save", () => {
    //     const wrapper = mount(
    //         <FuelSavingsPage
    //             actions={actions}
    //             fuelSavings={initialState.fuelSavings}
    //         />
    //     );
    //
    //     const save = wrapper.find('input[type="submit"]');
    //     save.simulate("click");
    //
    //     expect(actions.saveFuelSavings).toHaveBeenCalledWith(
    //         initialState.fuelSavings
    //     );
    // });
    //
    // it("calls calculateFuelSavings upon changing a field", () => {
    //     const wrapper = mount(
    //         <FuelSavingsPage
    //             actions={actions}
    //             fuelSavings={initialState.fuelSavings}
    //         />
    //     );
    //     const name = "newMpg";
    //     const value = 10;
    //
    //     const input = wrapper.find('input[name="newMpg"]');
    //     input.simulate("change", { target: { name, value } });
    //
    //     expect(actions.calculateFuelSavings).toHaveBeenCalledWith(
    //         initialState.fuelSavings,
    //         name,
    //         value
    //     );
    // });

    // it("should match snapshot", () => {
    //     const store = configureMockStore()({});
    //     const component = create(
    //         <Provider store={store}>
    //             <ConnectedFuelSavingsPage />
    //         </Provider>
    //     );
    //     const tree = component.toJSON();
    //
    //     expect(tree).toMatchSnapshot();
    // });
});
