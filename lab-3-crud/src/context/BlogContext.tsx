import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: boolean;
}

interface BlogState {
  posts: BlogPost[];
}

type BlogAction =
  | { type: "ADD_POST"; payload: Omit<BlogPost, "id"> }
  | { type: "UPDATE_POST"; payload: BlogPost }
  | { type: "DELETE_POST"; payload: string };

const initialState: BlogState = {
  posts: [],
};

const blogReducer = (state: BlogState, action: BlogAction): BlogState => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, { ...action.payload, id: uuidv4() }],
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

interface BlogContextType {
  state: BlogState;
  dispatch: React.Dispatch<BlogAction>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
