import * as THREE from 'three'
import { proxy } from 'valtio'
import img1 from '../../../../assets/images/premium/elevator/slider-elevator-01.png'
import img2 from '../../../../assets/images/premium/elevator/slider-elevator-02.png'
import img3 from '../../../../assets/images/premium/elevator/slider-elevator-03.png'
import img4 from '../../../../assets/images/premium/elevator/slider-elevator-04.png'
import img5 from '../../../../assets/images/premium/elevator/slider-elevator-05.png'
import img6 from '../../../../assets/images/premium/elevator/slider-elevator-06.png'
import img7 from '../../../../assets/images/premium/elevator/slider-elevator-07.png'
import img8 from '../../../../assets/images/premium/elevator/slider-elevator-08.png'
import img9 from '../../../../assets/images/premium/elevator/slider-elevator-09.png'
import img10 from '../../../../assets/images/premium/elevator/slider-elevator-10.png'
import img11 from '../../../../assets/images/premium/elevator/slider-elevator-11.png'
import img12 from '../../../../assets/images/premium/elevator/slider-elevator-12.png'

export const damp = THREE.MathUtils.damp
export const state = proxy({
  clicked: null,
  urls: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((u) => u),
  pages: 5,
})
