import gsap from "gsap";
export default class anime {
  run() {
    return new Promise((resolve, reject) => {
      let tl = gsap.timeline();
      tl.to('#loader', {
        x: '0',
        onComplete() {
          resolve()
        }
      });
      tl.to('#loader', {
        x: '100%'
      });
      tl.set('#loader', {
        x: '-100%'
      });
    })
  }
}