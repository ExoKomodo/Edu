<template>
    <label class="mr-2">Language:
      <select v-model="selected.language" class="text-black">
        <option v-for="option in languageOptions" v-bind:value="option.id" :selected="selected.language == option.id">{{option.value}}</option>
      </select>
    </label>
    <label>Theme:
      <select v-model="selected.theme" class="text-black">
        <option v-for="option in themeOptions" :value="option.id" :selected="selected.theme == option.id">{{option.value}}</option>
      </select>
    </label>
    <v-ace-editor
      ref="codeEditor"
      :value="modelValue"
      @change="updateContent"
      :lang="selected.language"
      :theme="selected.theme"
      :style="`height: ${height ? height : 20}rem`"
      :options="{
        useWorker: true,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      }"/>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue';

// NOTE: Combination of props and emit helps set up `v-model`: https://vuejs.org/guide/components/v-model.html
const props = defineProps({
  modelValue: String,
  height: Number,
});

const emit = defineEmits([
  'update:modelValue',
]);

type ThemeOption = { id: string, value: string }

const themeOptions: ThemeOption[] = [
  'tomorrow_night_eighties',
  'chrome',
  'monokai',
].map(theme => {
  return {
    id: theme,
    value: theme,
  };
});

type LanguageOption = { id: string, value: string }

const languageOptions: LanguageOption[] = [
  'html',
  'python',
  'javascript',
].map(language => {
  return {
    id: language,
    value: language,
  };
});

const selected = reactive({
  language: languageOptions[0].id,
  theme: themeOptions[0].id,
});

// NOTE: Grabs the DOM element with `ref="codeEditor"`
const codeEditor = ref();

function getEditor(editor: Ref<any>) {
  return codeEditor.value._editor;
}

function updateContent(event: any) {
  emit('update:modelValue', getEditor(codeEditor).getValue());
}

onMounted(() => {
  if (!props.modelValue) {
    let value = '';
    switch (selected.language) {
      case 'html': {
        value = `<!DOCTYPE html>
<html>
<body>

  <h1>Oh boy</h1>
  <div>Oh no.</div>

</body>
</html> 
`;
        break;
      }
      case 'javascript': {
        value = `function summing(nums) {
  return nums.reduce((x, y) => x + y);
}

let nums = [];
for (let i = 0; i < 100; i++) {
  nums.push(Math.pow(i, 2));
}
`;
        break;
      }
      case 'python': {
        value = `import functools

from typing import Iterable

def summing(nums: Iterable[int]) -> int:
  return functools.reduce(lambda x, y: x + y, nums)

if __name__ == '__main__':
  # Sum the first hundred squares
  summing([
    x ** 2 for x in range(100)
  ])
`;
        break;
      }
      default: {
        value = '';
        break;
      }
    }
    getEditor(codeEditor).setValue(value);
  }
});
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>