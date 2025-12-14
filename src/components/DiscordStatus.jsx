import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DiscordStatus.css';

const DiscordStatus = ({ userId }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();
        
        console.log('Lanyard API Response:', data);
        
        if (data.success) {
          setStatus(data.data);
        } else {
          console.error('Lanyard API Error:', data.error);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Discord status:', error);
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [userId]);

  const getStatusColor = (discordStatus) => {
    switch (discordStatus) {
      case 'online':
        return '#43b581';
      case 'idle':
        return '#faa61a';
      case 'dnd':
        return '#f04747';
      default:
        return '#747f8d';
    }
  };

  const getStatusText = () => {
    if (loading) return 'Loading...';
    if (!status) return 'Offline';

    const activities = status.activities || [];
    const customStatus = activities.find(a => a.type === 4);
    
    if (customStatus && customStatus.state) {
      return customStatus.state;
    }

    const mainActivity = activities.find(a => a.type !== 4);
    if (mainActivity) {
      if (mainActivity.name === 'Spotify') {
        return `Listening to ${mainActivity.details || 'Spotify'}`;
      }
      return `Playing ${mainActivity.name}`;
    }

    return status.discord_user?.username || 'Discord Status';
  };

  return (
    <motion.div
      className="discord-status"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="status-indicator-wrapper">
        <motion.div
          className="status-indicator"
          style={{ backgroundColor: getStatusColor(status?.discord_status) }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <span className="status-text">{getStatusText()}</span>
    </motion.div>
  );
};

export default DiscordStatus;
