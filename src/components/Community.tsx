import { useEffect, useState } from "react";
import { NavigationProps } from "../types";
import Post from "./Post";
import Image from "next/image";
import urukCommunity from "../assets/uruk-community.png";

interface CommunityProps extends NavigationProps {
  state?: {
    contract?: {
      getArticle: (id: number) => Promise<ArticleType>;
    };
  };
}

interface ArticleType {
  id: number;
  title: string;
  content: string;
  author: string;
  timestamp: number;
}

const Community = ({ state, setActive }: CommunityProps) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [communityPosts, setCommunityPosts] = useState([
    {
      id: 101,
      author: "Community Manager",
      avatar: "/placeholder.svg",
      content: "Welcome to our community! Feel free to join discussions, share your knowledge, and connect with fellow members.",
      timestamp: "Pinned post",
      likes: 156,
      comments: 42
    },
    {
      id: 102,
      author: "Ethereum Foundation",
      avatar: "/placeholder.svg",
      content: "New research paper on scalability solutions is now available. Read and discuss it in our Technical Corner.",
      timestamp: "3 days ago",
      likes: 89,
      comments: 17
    },
    {
      id: 103,
      author: "Workshop Team",
      avatar: "/placeholder.svg",
      content: "We're hosting a virtual workshop on smart contract security next Friday. RSVP in the events section!",
      timestamp: "1 week ago",
      likes: 124,
      comments: 31
    }
  ]);
  
  useEffect(() => {
    setActive('community');
    
    const getArticles = async () => {
      if (state?.contract) {
        try {
          const article = await state.contract.getArticle(1);
          console.log(article);
          setArticles([article]);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
    };

    if (state?.contract) {
      getArticles();
    }
  }, [state, setActive]);

  const handleLike = (id: number) => {
    setCommunityPosts(communityPosts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image 
                  src={urukCommunity} 
                  alt="Community" 
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">URUK Community</h1>
                <p className="text-gray-600 dark:text-gray-400">Connect, share, and grow with fellow members</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our community is a place for blockchain enthusiasts, developers, and creators to share ideas,
              collaborate on projects, and stay informed about the latest trends and innovations in the space.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                #blockchain
              </span>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                #web3
              </span>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                #cryptocurrency
              </span>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                #developers
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Community Posts</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <Post 
                key={article.id}
                id={article.id}
                author={article.author}
                avatar="/placeholder.svg"
                content={article.content}
                timestamp={new Date(article.timestamp).toLocaleDateString()}
                likes={0}
                comments={0}
                onLike={handleLike}
              />
            ))}
            {communityPosts.map((post) => (
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

        {/* Sidebar */}
        <div className="md:w-1/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-white">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-medium text-gray-800 dark:text-white">Smart Contract Workshop</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">May 15, 2025 • Virtual</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Learn best practices for secure smart contract development</p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 className="font-medium text-gray-800 dark:text-white">URUK Community Meetup</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">May 27, 2025 • San Francisco</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Join us for networking and discussions</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">DeFi Innovations Panel</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">June 8, 2025 • Virtual</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Experts discuss the future of decentralized finance</p>
              </div>
            </div>
            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              View All Events
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-white">Popular Topics</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Smart Contracts</span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs">
                  128 posts
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">DeFi Protocols</span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs">
                  95 posts
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">NFT Projects</span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs">
                  87 posts
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Layer 2 Solutions</span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs">
                  76 posts
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Governance</span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full text-xs">
                  64 posts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;