<template>
  <van-cell class="item" center :title="item.name">
    <template #label>
      <div class="text-xs">
        <span>包含的订阅：{{ metadataInfo }}</span>
      </div>
    </template>
    <template #value>
      <div class="flex w-full justify-end gap-2">
        <PolicyOutputSheet :id="item.id" type="collection" />
        <div class="i-mdi:pencil" @click="handleNavEditPage" />
        <SubscriptionDeleteDialog :id="item.id" type="collection" @delete="id => emits('delete', id)" />
      </div>
    </template>
  </van-cell>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useRouter } from 'vue-router';

import { Collection } from '../types/collection.ts';
import PolicyOutputSheet from './PolicyOutputSheet.vue';
import SubscriptionDeleteDialog from './SubscriptionDeleteDialog.vue';

const router = useRouter();

const emits = defineEmits<{
  delete: [id: string];
}>();

const props = defineProps({
  item: {
    type: Object as PropType<Collection>,
    required: true,
  },
});

const metadataInfo = computed(() => {
  const { subscriptions } = props.item;
  return subscriptions.map(item => item.subscription.name).join(', ');
});

const handleNavEditPage = () => {
  router.replace(`/collection/edit/${props.item.id}`);
};
</script>

<style scoped lang="scss">
.item:deep(.van-cell__title) {
  flex: 2 !important;
}
</style>
