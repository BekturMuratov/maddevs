import MyComponent from '../../../../../../client/prismicSlices/pageParts/CustomerRatesSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'client/prismicSlices/pageParts/CustomerRatesSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"customer_rates_slice","items":[{"title":"whiteboard magnetic e-services","subtitle":"synergize clicks-and-mortar applications"},{"title":"strategize distributed metrics","subtitle":"productize rich bandwidth"},{"title":"seize sticky niches","subtitle":"incentivize front-end initiatives"},{"title":"utilize robust markets","subtitle":"unleash integrated schemas"},{"title":"disintermediate next-generation eyeballs","subtitle":"harness integrated blockchains"},{"title":"maximize turn-key architectures","subtitle":"embrace distributed e-services"}],"primary":{},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
