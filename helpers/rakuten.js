import axios from 'axios'
import axiosJsonAdapter from 'axios-jsonp'

export const addCart = (
  shopId,
  itemId,
  units,
  redirect = false,
  device = 'sp'
) => {
  const params = {
    shopid: shopId,
    itemid: itemId,
    device,
    userid: 'itempage',
    units
  }

  axios
  .get('http://direct.step.rakuten.co.jp/rms/mall/cartAdd/', {
    adapter: axiosJsonAdapter,
    params
  })
  .then(() => {
    if (redirect) location.href = getCartUrl(device)
  })
}

export const getCartUrl = (device) =>
  device === 'sp'
    ? 'https://sp.basket.step.rakuten.co.jp/rms/mall/bss/cartall/'
    : 'https://basket.step.rakuten.co.jp/rms/mall/bs/cartall/'
