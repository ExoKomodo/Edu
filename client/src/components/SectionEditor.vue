<template>
  <div v-if="AuthService.isAdmin(auth0)"
       class="bg-mysticStone text-white border-slate-400 border-2 rounded p-1 pl-2 my-2">
    <div class="text-2xl">Section Editor</div>
    <input type="checkbox"
           id="edit-mode"
           name="editMode"
           v-model="state.isEditMode">
    <label for="edit-mode"> {{ handlerText }} mode?</label>
    <span class="inline-block"
          :class="{ invisible: !state.isEditMode }">
      <Button :handler="() => handler(state)"
              :text="handlerText"></Button>
    </span>
    <div :class="{ invisible: !state.isEditMode }">
      <input type="checkbox"
             id="show-preview"
             name="showPreview"
             v-model="state.showPreview">
      <label for="show-preview"> Show preview?</label>
    </div>
    <div v-if="AuthService.isAdmin(auth0) && state.isEditMode">
      <div class="text-white border-white border-2 rounded p-1 pl-2 my-2 mr-12">Name</div>
      <CodeEditor v-model="state.name"
                  :height="2"></CodeEditor>
      <p v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
         class="text-2xl font-bold border-slate-400 rounded border-2 p-1 pl-2">{{ state.name?.toUpperCase() }}</p>
      <div class="text-white border-white border-2 rounded p-1 pl-2 p my-2 mr-1">Description</div>
      <CodeEditor v-model="state.description"
                  :height="2"></CodeEditor>
      <p v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
         class="text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2">{{ state.description }}</p>
      <div class="text-white border-white border-2 rounded p-1 pl-2 my-2 mr-8">Content</div>
      <CodeEditor v-model="state.content"
                  language="html"
                  :height="40"></CodeEditor>
      <div v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
           class="text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2"
           v-html="state.content"></div>
      <div class="text-white border-white border-2 rounded p-1 pl-2 my-2 mr-8">Difficulty (integer)</div>
      <CodeEditor v-model="state.difficulty"
                  :height="2"></CodeEditor>
      <div v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
           class="text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2"
           v-html="state.difficulty"></div>
      <div class="text-white border-white border-2 rounded p-1 pl-2 my-2 mr-12">Id</div>
      <CodeEditor v-model="state.id"
                  :height="2"></CodeEditor>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import CodeEditor from '@/components/CodeEditor.vue';
import { reactive } from 'vue';
import AuthService from '@/services/AuthService';
import { useAuth0 } from '@auth0/auth0-vue';

export type SectionEditorState = {
  isEditMode: boolean,
  showPreview: boolean,
  id: string,
  name: string,
  content: string,
  description: string,
  difficulty: string,
};

const auth0 = useAuth0();

const props = defineProps<{
  handler: (state: SectionEditorState) => void,
  handlerText: string,
  sectionId: string,
  sectionName: string,
  sectionContent: string,
  sectionDescription: string,
  sectionDifficulty: number,
}>();

const state = reactive<SectionEditorState>({
  isEditMode: false,
  showPreview: false,
  id: props.sectionId,
  name: props.sectionName,
  content: props.sectionContent,
  description: props.sectionDescription,
  difficulty: props.sectionDifficulty.toString(),
});
</script>
