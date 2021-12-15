<template>
  <div class="container">
    <div class="grid-lottie__grid">
      <Component
        :is="item.link && item.link.url ? 'a' : 'div'"
        v-for="item in items"
        :key="item['lottie-animation']"
        :href="item.link && item.link.url ? item.link.url : null"
        :target="item.link && item.link.url ? '_self' : null"
        :class="[
          item.alignText ? `card-item--text-${item.alignText}` : null,
          `card-item-${item.lottiePosition}`,
          item.fullWidth ? 'card-item-full-width' : null
        ]"
        class="card-item"
        data-testid="grid-lottie-animation-item"
        :style="{ backgroundColor: item.background || null }"
      >
        <div
          v-if="item['lottie-animation']"
          :class="`card-item__lottie card-item__lottie-${item.lottiePosition}`"
          :style="{
            'maxWidth': item.width ? `${item.width}px` : null,
            'height': item.height ? `${item.height}px` : null
          }"
        >
          <LottieMad
            :id="item['lottie-animation']"
            :lottie-link="$getMediaFromS3(`/images/${item['lottie-S3-path']+item['lottie-animation']}.json`)"
            :height="item.lottieHeight"
            :autoplay="true"
          />
        </div>
        <div
          :class="`card-item__content card-item__content-${item.lottiePosition}`"
          v-html="renderCardContent($prismic.asHtml(item.content))"
        />
        <UIArrowButton class="card-item__button" />
      </Component>
    </div>
  </div>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'
import LottieMad from '@/components/shared/LottieMad'

export default {
  name: 'GridLottieLink',

  components: {
    LottieMad,
    UIArrowButton,
  },

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },

  methods: {
    renderCardContent(content) {
      if (typeof content !== 'string') return ''
      return content
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-lottie {
  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1260px) {
      grid-gap: 24px;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
}

.card-item {
  box-sizing: border-box;
  color: $text-color--white-primary;
  background-color: $bgcolor--black-pale;
  padding: 80px;
  display: grid;
  grid-template-areas:"lottie" "content" "button";

  &:hover {
    .ui-arrow-button {
      background-color: $text-color--white-primary;
      color: $text-color--black-oil;
    }
  }

  &-full-width {
    grid-column: auto/span 2;
    .card-item__button {
      justify-self: center;

      @media screen and (max-width: 1024px) {
        justify-self: left;
      }
    }

    @media screen and (max-width: 1024px) {
      grid-column: auto;
    }
  }

  &-bottom{
    padding-bottom: 0;
    grid-template-areas:"content" "button" "lottie";
  }

  @media screen and (max-width: 1024px) {
    padding: 60px;

    &-bottom {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 32px;

    &-bottom {
      padding-bottom: 0;
    }
  }
  &__lottie {
    margin-bottom: 60px;
    grid-area: lottie;

    @media screen and (max-width: 580px) {
      margin-bottom: 40px;
    }
    &-bottom {
      margin: 0 auto;

      @media screen and (max-width: 343px) {
        width: 289px;
        height: 117px;
      }
      @media screen and (max-width: 1024px) {
        margin-top:56px;
      }
    }
  }

  &--text-center {
    /deep/ p {
      text-align: center;

      @media screen and (max-width: 1024px) {
        text-align: left;
      }
    }
  }

  &__button {
    grid-area: button;
    align-self: end;
  }

  &__content {
    grid-area: content;
    @include font('Inter', 35px, 700);
    line-height: 45px;
    letter-spacing: -1.3%;
    word-break: break-word;
    max-width: 1080px;
    &-bottom {
      margin-top: 40px;
      font-size: 35px;
      line-height: 45px;
    }
    @media screen and (max-width: 1260px) {
      font-size: 35px;
      line-height: 45px;
      &-bottom {
        font-size: 35px;
        line-height: 45px;
      }
    }
    @media screen and (max-width: 1024px) {
      font-size: 30px;
      line-height: 37px;
      &-bottom {
        margin-top: 0;
        font-size: 30px;
        line-height: 37px;
      }
    }
  }
}
</style>
