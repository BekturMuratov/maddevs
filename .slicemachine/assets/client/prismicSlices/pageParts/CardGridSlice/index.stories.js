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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"innovate scalable mindshare","description":"engineer vertical systems","btnLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"fullWidth":true},{"title":"transition wireless bandwidth","description":"seize sticky blockchains","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"benchmark dynamic models","description":"e-enable world-class deliverables","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"grow e-business e-tailers","description":"disintermediate seamless applications","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"title":"reintermediate extensible experiences","description":"facilitate open-source e-markets"},{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"title":"seize leading-edge methodologies","description":"expedite frictionless functionalities"},{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"title":"whiteboard proactive relationships","description":"incentivize transparent solutions"},{"link":{"link_type":"Web","url":"http://twitter.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"title":"e-enable one-to-one e-commerce","description":"implement leading-edge action-items"},{"link":{"link_type":"Web","url":"https://prismic.io"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"title":"innovate extensible systems","description":"seize out-of-the-box web services"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"title":"expedite wireless e-commerce","description":"enable best-of-breed ROI"}],"primary":{"displayButtons":true,"background":"black","colorTheme":"white","animation":"fade-down-left"},"id":"_CardGridWithIcon"}
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
      mock: {"variation":"richTextCards","name":"RichTextCards","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#bf1956","title":"orchestrate sticky blockchains","content":[{"type":"paragraph","text":"Nisi sit veniam irure veniam Lorem mollit.","spans":[]}],"alignText":"center"},{"fullWidth":true,"background":"#68e642","title":"iterate extensible e-business","content":[{"type":"paragraph","text":"Anim et ipsum in. Proident sit adipisicing amet pariatur esse irure enim. Aliquip consectetur cupidatat est mollit ea enim ullamco laboris consequat officia enim ex consectetur aliquip.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#38de9e","title":"grow 24/7 models","content":[{"type":"paragraph","text":"Incididunt dolor ea commodo tempor officia exercitation id duis Lorem veniam. Nulla exercitation adipisicing laboris proident aute veniam sint fugiat dolor.","spans":[]}],"alignText":"left"},{"fullWidth":true,"background":"#5c2992","title":"drive bricks-and-clicks partnerships","content":[{"type":"paragraph","text":"Dolore deserunt officia et tempor. Voluptate irure laborum consequat laboris Lorem occaecat ullamco quis irure dolor.","spans":[]}],"alignText":"left"},{"fullWidth":false,"background":"#bfb4c9","title":"enhance dynamic e-commerce","content":[{"type":"paragraph","text":"Voluptate aute veniam sint consequat amet cupidatat deserunt in elit. Sit dolore aute eu.","spans":[]}],"alignText":"left"}],"primary":{"animation":"fade-down-righ"},"id":"_RichTextCards"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCards.storyName = 'RichTextCards'

export const _RichTextCardsAnimation = () => ({
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
      mock: {"variation":"richTextCardsAnimation","name":"RichTextCardsAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":true,"background":"#efcfe3","title":"target end-to-end paradigms","content":[{"type":"paragraph","text":"Amet deserunt veniam nostrud Lorem et. Magna aliquip aliquip duis esse incididunt ut non dolor tempor ea id ex deserunt sint elit.","spans":[]}],"alignText":"center","lottie-animations":"research-animate","width":"extend bricks-and-clicks architectures","height":"integrate mission-critical infrastructures"},{"fullWidth":false,"background":"#be78db","title":"recontextualize sticky e-business","content":[{"type":"paragraph","text":"Deserunt sint id deserunt aute duis ipsum quis.","spans":[]}],"alignText":"center","lottie-animations":"active-development","width":"benchmark best-of-breed ROI","height":"iterate open-source relationships"},{"fullWidth":false,"background":"#697731","title":"aggregate best-of-breed e-business","content":[{"type":"paragraph","text":"Consectetur minim consectetur sunt nostrud amet aliquip velit Lorem quis laboris proident. Officia duis duis excepteur tempor eiusmod minim nisi. Cillum dolore qui culpa laboris.","spans":[]}],"alignText":"center","lottie-animations":"development-stage","width":"leverage cross-media architectures","height":"productize granular schemas"},{"fullWidth":false,"background":"#7e8062","title":"empower bricks-and-clicks e-markets","content":[{"type":"paragraph","text":"Minim elit excepteur dolore ullamco consequat Lorem occaecat veniam minim elit est. Id exercitation et irure voluptate magna labore enim ullamco est labore ea.","spans":[]}],"alignText":"center","lottie-animations":"stack-selection","width":"scale compelling markets","height":"brand collaborative channels"}],"primary":{"animation":"zoom-in-up"},"id":"_RichTextCardsAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsAnimation.storyName = 'RichTextCardsAnimation'

export const _RichTextCardsBottomAnimation = () => ({
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
      mock: {"variation":"richTextCardsBottomAnimation","name":"RichTextCardsBottomAnimation","slice_type":"card_grid_slice","items":[{"fullWidth":false,"background":"#b87584","title":"innovate 24/7 blockchains","content":[{"type":"paragraph","text":"Nisi mollit nulla voluptate.","spans":[]}],"alignText":"left","lottie-animations":"infrastructure-animation","width":"reinvent 24/365 architectures","height":"streamline user-centric synergies"},{"fullWidth":false,"background":"#a5182f","title":"whiteboard seamless communities","content":[{"type":"paragraph","text":"Sunt sint velit aliquip nulla et duis sit ipsum laborum labore.","spans":[]}],"alignText":"left","lottie-animations":"qa-page","width":"harness granular networks","height":"unleash proactive e-tailers"},{"fullWidth":false,"background":"#1b2202","title":"engineer B2C platforms","content":[{"type":"paragraph","text":"Lorem cillum dolore deserunt anim. Dolore nulla do proident officia non minim pariatur mollit fugiat eu dolor aute in.","spans":[]}],"alignText":"left","lottie-animations":"qa-page","width":"embrace extensible deliverables","height":"whiteboard frictionless supply-chains"}],"primary":{"animation":"fade-left"},"id":"_RichTextCardsBottomAnimation"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RichTextCardsBottomAnimation.storyName = 'RichTextCardsBottomAnimation'
