import { useAccount, useConfig } from "wagmi";
import { useEffect, useState, useCallback } from "react";
import { NavigationProps } from "../types";
import Image from "next/image";
import urukProfile from "../assets/uruk-profile.png";
import Post from "./Post";

interface Contract {
  getMember(address: string): Promise<MemberType>;
  getMemberPosts(address: string): Promise<PostType[]>;
}

interface State {
  contract?: Contract;
}

interface ProfileProps extends NavigationProps {
  state?: State;
}

interface MemberType {
  nickname: string | null;
  memberIndex: number | null;
  memberAddress: string | null;
  memberSince: number | bigint | null;
}

interface PostType {
  id: number;
  content: string;
  owner: string;
  timestamp: number;
}

const Profile = ({ state, setActive }: ProfileProps) => {
  const config = useConfig();
  const account = useAccount({
    config,
  });
  
  const [member, setMember] = useState<MemberType>({
    nickname: null,
    memberIndex: null,
    memberAddress: null,
    memberSince: null,
  });

  const [memberPosts, setMemberPosts] = useState<PostType[]>([]);

  const getMember = useCallback(async (_memberAddr: string) => {
    if (state?.contract) {
      try {
        const _member = await state.contract.getMember(_memberAddr);
        setMember({
          nickname: _member.nickname,
          memberIndex: _member.memberIndex,
          memberAddress: _member.memberAddress,
          memberSince: _member.memberSince,
        });
      } catch (error) {
        console.error("Error fetching member:", error);
      }
    }
  }, [state]);

  const getMemberPosts = useCallback(async (_memberAddr: string) => {
    if (state?.contract) {
      try {
        const _memberPosts = await state.contract.getMemberPosts(_memberAddr);
        setMemberPosts(_memberPosts);
      } catch (error) {
        console.error("Error fetching member posts:", error);
      }
    }
  }, [state]);

  useEffect(() => {
    setActive('profile');
    
    if (account && account.address && state?.contract) {
      getMember(account.address);
      getMemberPosts(account.address);
    }
  }, [account, state, setActive, getMember, getMemberPosts]);

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
        {/* Profile Header/Banner */}
        <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
          <div className="absolute -bottom-16 left-6">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image 
                src={urukProfile} 
                alt="Profile" 
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="pt-20 px-6 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {member.nickname || "Anonymous User"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Member since: {member.memberSince 
              ? new Date(Number(member.memberSince) * 1000).toLocaleDateString() 
              : "Unknown"}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 truncate">
            Address: {member.memberAddress || account?.address || "Not connected"}
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Edit Profile
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      {/* User Posts */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Your Posts</h2>
        {memberPosts.length > 0 ? (
          <div className="space-y-4">
            {memberPosts.map((post, index) => (
              <Post
                key={index}
                id={post.id}
                author={member.nickname || "Anonymous User"}
                authorAddress={post.owner}
                content={post.content}
                timestamp={post.timestamp}
                avatar={urukProfile.src}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">You haven&apos;t created any posts yet.</p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Create Your First Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;