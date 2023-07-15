<template>
  <div v-if="AuthService.isAdmin(auth0)"
       class="bg-mysticStone text-white border-slate-400 border-2 rounded p-1 pl-2 my-2">
    <div class="text-2xl">Assignment Editor</div>
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
      <div class="text-white border-white border-2 rounded p-1 pl-2 p my-2 mr-1">Short Description</div>
      <CodeEditor v-model="state.description"
                  :height="2"></CodeEditor>
      <p v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
         class="text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2">{{ state.description }}</p>
      <div class="text-white border-white border-2 rounded p-1 pl-2 my-2 mr-8">Problem Explanation</div>
      <CodeEditor v-model="state.problemExplanation"
                  language="html"
                  :height="40"></CodeEditor>
      <div v-if="AuthService.isAdmin(auth0) && state.isEditMode && state.showPreview"
           class="text-xl border-slate-400 rounded border-2 p-1 pl-2 my-2"
           v-html="state.problemExplanation"></div>
      <div>
        <label for="required-sections">Choose required sections:</label>
        <select id="required-sections"
                name="required-sections"
                class="h-10"
                v-model="state.requiredSectionIds"
                multiple>
          <option v-for="(sectionMetadata, id) of sectionIndex"
                  :value="id"
                  class="text-black">{{ castToSectionMetadata(sectionMetadata).name }}</option>
        </select>
      </div>
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
import SectionService from '@/services/SectionService';
import { useAuth0 } from '@auth0/auth0-vue';
import type { Id, SectionMetadata } from '@/models';
import { useToast } from 'vue-toastification';

export type AssignmentEditorState = {
  isEditMode: boolean,
  showPreview: boolean,
  id: string,
  name: string,
  description: string,
  problemExplanation: string,
  requiredSectionIds: Id[],
};

const auth0 = useAuth0();
const toast = useToast();

const props = defineProps<{
  handler: (state: AssignmentEditorState) => void,
  handlerText: string,
  assignmentId: string,
  assignmentName: string,
  assignmentDescription: string,
  assignmentProblemExplanation: string,
  assignmentSectionIds: Id[],
}>();

const state = reactive<AssignmentEditorState>({
  isEditMode: false,
  showPreview: false,
  id: props.assignmentId,
  name: props.assignmentName,
  description: props.assignmentDescription,
  problemExplanation: props.assignmentProblemExplanation,
  requiredSectionIds: props.assignmentSectionIds,
});

const sectionIndex = await SectionService.getAllAsync(
  {
    toast: toast,
    token: await AuthService.getAccessTokenAsync(auth0, { toast: toast }),
  }
);

function castToSectionMetadata(value: [string, SectionMetadata]) {
  return (value as unknown) as SectionMetadata;
}
</script>
