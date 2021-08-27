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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"card_grid_slice","items":[{"title":"mesh revolutionary convergence","description":"utilize mission-critical interfaces","btnLink":{"link_type":"Web","url":"https://prismic.io"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"grow proactive ROI","description":"orchestrate seamless technologies","btnLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"fullWidth":false},{"title":"generate bricks-and-clicks web services","description":"unleash global architectures","btnLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"fullWidth":false}],"primary":{"colorTheme":"white","animation":"none"},"id":"_DefaultSlice"}
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
      mock: {"variation":"cardGridWithList","name":"Card Grid With List","slice_type":"card_grid_slice","items":[{"title":"innovate dot-com vortals","description":[{"type":"paragraph","text":"Velit voluptate voluptate do commodo. Ipsum nostrud ea occaecat laboris ipsum. Occaecat consectetur nostrud nisi non ex nostrud minim veniam.","spans":[]}],"list":"incentivize visionary users","fullWidth":true},{"title":"aggregate plug-and-play niches","description":[{"type":"paragraph","text":"Dolore est consequat exercitation esse sunt dolor commodo minim officia anim ea veniam ad laboris aliqua. Occaecat veniam anim consectetur excepteur fugiat.","spans":[]}],"list":"empower compelling interfaces","fullWidth":true},{"title":"utilize seamless schemas","description":[{"type":"paragraph","text":"Voluptate pariatur Lorem incididunt ad duis irure ea aliquip eiusmod.","spans":[]}],"list":"iterate interactive content","fullWidth":true}],"primary":{"colorTheme":"white","animation":"none"},"id":"_CardGridWithList"}
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
      mock: {"variation":"cardGridWithIcon","name":"Card Grid With Icon","slice_type":"card_grid_slice","items":[{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"},"title":"implement virtual convergence","description":"recontextualize strategic communities"},{"link":{"link_type":"Web","url":"http://google.com"},"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"title":"grow virtual users","description":"expedite killer mindshare"}],"primary":{"displayButtons":true,"background":"black","colorTheme":"white"},"id":"_CardGridWithIcon"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CardGridWithIcon.storyName = 'Card Grid With Icon'
