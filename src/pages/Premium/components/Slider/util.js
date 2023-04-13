import * as THREE from 'three'
import { proxy } from 'valtio'
import img from '../../../../assets/images/1.png'

export const damp = THREE.MathUtils.damp
export const state = proxy({
  clicked: null,
  urls: [img, img, img, img, img, img, img, img, img, img, img, img].map((u) => u),
  pages: 5,
})
