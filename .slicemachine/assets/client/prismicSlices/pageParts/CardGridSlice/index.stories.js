import MyComponent from '../../../../../../client/prismicSlices/pageParts/CardGridSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CardGridSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"visualize real-time models","description":"empower B2B relationships","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"integrate 24/365 architectures","description":"drive dot-com deliverables","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"reintermediate strategic e-commerce","description":"enable dynamic partnerships","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"whiteboard revolutionary channels","description":"empower frictionless e-commerce","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _CardGridWithList = () => ({
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
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"synthesize innovative channels","description":[{"type":"paragraph","text":"Deserunt eu nisi ex exercitation cillum sint irure esse ullamco reprehenderit non aute.","spans":[]}],"list":"scale strategic e-tailers","fullWidth":true},{"title":"deliver synergistic technologies","description":[{"type":"paragraph","text":"Cupidatat non Lorem officia nostrud eu.","spans":[]}],"list":"architect B2C e-services","fullWidth":false},{"title":"exploit revolutionary convergence","description":[{"type":"paragraph","text":"Laboris excepteur sint nostrud laborum cupidatat cillum minim nulla labore Lorem id proident eu.","spans":[]}],"list":"aggregate intuitive ROI","fullWidth":false},{"title":"matrix bricks-and-clicks relationships","description":[{"type":"paragraph","text":"Excepteur ea cupidatat cupidatat in sint aliqua cupidatat consectetur do ad.","spans":[]}],"list":"unleash rich eyeballs","fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_CardGridWithList"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithList.storyName = 'Card Grid With List'

export const _CardGridWithIcon = () => ({
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"https://prismic.io"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"title":"e-enable cross-platform e-commerce","description":"integrate bricks-and-clicks interfaces"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"title":"generate mission-critical convergence","description":"seize turn-key bandwidth"}],"primary":{"displayButtons":false,"background":"black","colorTheme":"white"},"id":"_CardGridWithIcon"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithIcon.storyName = 'Card Grid With Icon'

export const _RichTextCards = () => ({
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#6f8637","title":"integrate intuitive models","content":[{"type":"paragraph","text":"Ipsum Lorem magna non cillum Lorem exercitation cillum est esse incididunt nostrud consectetur dolore.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#cca4a","title":"transition cutting-edge models","content":[{"type":"paragraph","text":"Voluptate occaecat cupidatat Lorem consectetur fugiat labore laboris enim est do. Nostrud fugiat labore voluptate enim excepteur officia commodo deserunt aliquip reprehenderit eu ex esse mollit.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#543eb9","title":"envisioneer out-of-the-box paradigms","content":[{"type":"paragraph","text":"Ut aute anim fugiat ea esse cillum pariatur. Pariatur mollit culpa sint eu et officia.","spans":[]}],"alignText":"center"},{"fullWidth":false,"background":"#f5d284","title":"incentivize rich portals","content":[{"type":"paragraph","text":"Consectetur mollit nulla ut sit excepteur dolore aliquip exercitation irure incididunt. Commodo dolore id sunt magna sit minim do.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#562061","title":"maximize 24/7 deliverables","content":[{"type":"paragraph","text":"Voluptate ut anim aliqua culpa eu labore magna et mollit aliquip. Lorem occaecat veniam qui minim ex. Excepteur elit commodo eu dolore incididunt sit esse.","spans":[]}],"alignText":"center"}],"primary":{"animation":"zoom-in"},"id":"_RichTextCards"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCards.storyName = 'RichTextCards'
