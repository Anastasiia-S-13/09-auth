import { create } from "zustand";
import { createNotePost } from "../api/api";
import { persist } from "zustand/middleware";
import { NoteTag } from "@/types/note";

type NoteDraftStore = {
    draft: createNotePost;
  setDraft: (note: createNotePost) => void;
  clearDraft: () => void;
}

const initialDraft: createNotePost = {
  title: '',
  content: '',
  tag: 'Todo' as NoteTag,
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist<NoteDraftStore>(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
    }
  )
);