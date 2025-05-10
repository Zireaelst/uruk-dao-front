import { useEffect, useState } from "react";
import { NavigationProps } from "../types";
import Image from "next/image";
import Post from "./Post";

interface FeedProps extends NavigationProps {
  state?: Record<string, unknown>;
}

interface PostType {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const Feed = ({ setActive }: FeedProps) => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "/placeholder.svg",
      content: "Just published my research on blockchain interoperability. Check it out!",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: "Maya Phillips",
      avatar: "/placeholder.svg",
      content: "Excited to announce our new community event next month. RSVP in the events section!",
      timestamp: "5 hours ago",
      likes: 42,
      comments: 11
    },
    {
      id: 3,
      author: "Sam Watts",
      avatar: "/placeholder.svg",
      content: "Looking for collaborators on a new DeFi project. DM me if interested!",
      timestamp: "1 day ago",
      likes: 18,
      comments: 7
    }
  ]);

  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    setActive('feed');
  }, [setActive]);

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        author: "You",
        avatar: "/placeholder.svg",
        content: newPost,
        timestamp: "Just now",
        likes: 0,
        comments: 0
      };
      
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Feed</h1>
      
      {/* Create Post */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image 
              src="/placeholder.svg" 
              alt="Your profile" 
              width={40} 
              height={40}
              className="object-cover" 
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300">What&apos;s on your mind?</p>
        </div>
        <textarea 
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white mb-3"
          rows={3}
          placeholder="Share your thoughts..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              📷 Photo
            </button>
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              📎 Attachment
            </button>
          </div>
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
            onClick={handleCreatePost}
          >
            Post
          </button>
        </div>
      </div>
      
      {/* Feed Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            avatar={post.avatar}
            content={post.content}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;