import posts from '../../data/posts.json';
import { FeedItem } from '.';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FeedPage() {
  const location = useLocation();
  const [searchFilter, setSearchFilter] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  function setSearchParam() {
    const queryParams = new URLSearchParams(location.search);
    let searchParams = queryParams.get("search");
    setSearchFilter(searchParams || '');
  }

  useEffect(() => {
    const targetPosts = posts.filter((post) => {
      const { profileName, username, text } = post;
      const lowerSearchFilter = searchFilter.toLowerCase();
      return profileName.toLowerCase().includes(lowerSearchFilter) || username.toLowerCase().includes(lowerSearchFilter) || text.toLowerCase().includes(lowerSearchFilter);
    });
    setFilteredPosts(targetPosts);
  }, [searchFilter])

  useEffect(() => {
    setSearchParam();
  }, [location])

  return (
    <div>
      {filteredPosts.map(post => <FeedItem key={post.id} post={post} />)}
    </div>
  )
}

export {FeedPage}