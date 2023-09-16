import { atom, selector } from 'recoil';

const cartState = atom({
  key: 'cartState',
  default: JSON.parse(localStorage.getItem('cartState')) || [],
});

const cartItemCountSelector = selector({
  key: 'cartItemCountSelector',
  get: ({get}) => {
    const cartItems = get(cartState);
    return cartItems.length;
  }
});

export { cartState, cartItemCountSelector };

// get은 Recoil selector 내에서 사용되는 함수로, 다른 atom이나 selector의 현재 상태를 가져오는데 사용됩니다. 코드에서 보시다시피, get 함수는 cartState atom의 현재 상태를 조회하여 그 값을 가져오는데 사용되고 있습니다.
// selector는 Recoil에서 계산된 상태를 만드는데 사용되는 함수입니다. 이는 하나 이상의 atom이나 다른 selector의 상태를 기반으로 새로운 데이터를 생성하거나 변환할 수 있습니다. selector는 key와 get 속성을 갖는 객체를 인수로 받아들입니다.