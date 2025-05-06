import React from "react";
import Image from "next/image";

interface PostProps {
  id: number;
  author: string;
  authorAddress?: string;
  avatar?: string;
  content: string;
  timestamp: string | number;
  likes?: number;
  comments?: number;
  onLike?: (id: number) => void;
  onComment?: (id: number) => void;
  onShare?: (id: number) => void;
}

const Post = ({
  id,
  author,
  authorAddress,
  avatar = "/placeholder.svg",
  content,
  timestamp,
  likes = 0,
  comments = 0,
  onLike,
  onComment,
  onShare
}: PostProps) => {
  // Format timestamp if it's a number (Unix timestamp)
  const formattedTime = typeof timestamp === 'number' 
    ? new Date(timestamp * 1000).toLocaleDateString() 
    : timestamp;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
          <Image 
            src={avatar} 
            alt={`${author}'s avatar`} 
            width={40} 
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white">{author}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formattedTime}
            {authorAddress && (
              <span className="ml-2 text-xs text-gray-400 truncate">{`${authorAddress.substring(0, 6)}...${authorAddress.substring(authorAddress.length - 4)}`}</span>
            )}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
      
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <button 
          className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          onClick={() => onLike && onLike(id)}
        >
          <span>👍</span>
          <span>{likes} Likes</span>
        </button>
        <button 
          className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          onClick={() => onComment && onComment(id)}
        >
          <span>💬</span>
          <span>{comments} Comments</span>
        </button>
        <button 
          className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          onClick={() => onShare && onShare(id)}
        >
          <span>🔄</span>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;