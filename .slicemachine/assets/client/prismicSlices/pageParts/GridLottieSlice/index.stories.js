import MyComponent from '../../../../../../client/prismicSlices/pageParts/GridLottieSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/GridLottieSlice'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"grid_lottie_slice","items":[{"fullWidth":false,"background":"#a86961","title":"drive end-to-end methodologies","content":[{"type":"paragraph","text":"Esse do id tempor ut tempor sunt consectetur eiusmod anim incididunt esse.","spans":[]}],"alignText":"left","lottie-animation":"monetize killer models","lottiePosition":"top","width":"drive best-of-breed markets","height":"orchestrate holistic systems"},{"fullWidth":true,"background":"#b5f433","title":"deliver frictionless supply-chains","content":[{"type":"paragraph","text":"Proident commodo ut ipsum adipisicing.","spans":[]}],"alignText":"center","lottie-animation":"aggregate seamless markets","lottiePosition":"bottom","width":"monetize clicks-and-mortar blockchains","height":"productize efficient e-business"},{"fullWidth":true,"background":"#011ba5","title":"productize compelling e-business","content":[{"type":"paragraph","text":"Minim tempor aute elit velit aliqua laboris ut sunt est in nisi sunt veniam nulla consequat. Quis ullamco exercitation excepteur nostrud ut in eiusmod enim ex exercitation do commodo ad labore. Ea est esse excepteur ea Lorem deserunt ut sunt tempor anim consequat eu nulla nisi ex.","spans":[]}],"alignText":"left","lottie-animation":"redefine 24/7 e-services","lottiePosition":"top","width":"enable extensible users","height":"scale real-time action-items"}],"primary":{"animation":"fade-up"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _GridLottieLink = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"gridLottieLink","name":"GridLottieLink","slice_type":"grid_lottie_slice","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"fullWidth":false,"background":"#4730f9","title":"matrix strategic e-commerce","content":[{"type":"paragraph","text":"Officia deserunt amet cillum sint irure Lorem nulla eiusmod consequat qui tempor consectetur amet veniam.","spans":[]}],"alignText":"center","lottie-animation": "about-consulting",
          "lottie-S3-path": "custom/about/", "lottieHeight":"100px","lottiePosition":"top","width":"innovate B2C content","height":"drive end-to-end eyeballs"},{"fullWidth":false,"background":"#8aa40a","title":"empower cutting-edge bandwidth","content":[{"type":"paragraph","text":"Et proident nisi tempor adipisicing mollit amet occaecat ullamco adipisicing anim proident mollit irure. Veniam minim ipsum ad incididunt.","spans":[]}],"alignText":"left","lottie-animation": "about-consulting",
          "lottie-S3-path": "custom/about/","lottieHeight":"100px","lottiePosition":"top","width":"deliver visionary action-items","height":"transform real-time experiences"},{"fullWidth":true,"background":"#78587d","title":"deliver synergistic mindshare","content":[{"type":"paragraph","text":"Aliqua proident minim cillum cillum in sit esse sint proident adipisicing tempor culpa.","spans":[]}],"alignText":"center","lottie-animation": "about-infrastructure",
          "lottie-S3-path": "custom/about/","lottieHeight":"100px","lottiePosition":"bottom","width":"evolve intuitive e-business","height":"iterate B2B mindshare"},{"fullWidth":true,"background":"#630ea4","title":"disintermediate frictionless action-items","content":[{"type":"paragraph","text":"Elit nulla elit et ad adipisicing minim cillum officia proident cupidatat elit nisi ex. Pariatur in est Lorem enim aliqua aute tempor do velit cupidatat exercitation minim. Excepteur eiusmod fugiat id anim adipisicing anim commodo aliqua.","spans":[]}],"alignText":"left","lottie-animation": "about-consulting",
          "lottie-S3-path": "custom/about/","lottieHeight":"100px","lottiePosition":"top","width":"monetize customized ROI","height":"orchestrate synergistic web services"}],"primary":{"animation":"fade-down-left"},"id":"_GridLottieLink"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_GridLottieLink.storyName = 'GridLottieLink'
