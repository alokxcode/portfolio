import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DiscordStatus.css';

const DiscordStatus = ({ userId, onClick }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();
        
        if (data.success) {
          setStatus(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Discord status:', error);
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);

    return () => clearInterval(interval);
  }, [userId]);

  const getStatusColor = (discordStatus) => {
    switch (discordStatus) {
      case 'online':
        return '#3ba55c';
      case 'idle':
        return '#faa81a';
      case 'dnd':
        return '#ed4245';
      default:
        return '#747f8d';
    }
  };

  const getStatusText = () => {
    if (loading) return 'Loading...';
    if (!status || status.discord_status === 'offline') return 'Offline';
    
    switch (status.discord_status) {
      case 'online':
        return 'Online';
      case 'idle':
        return 'Idle';
      case 'dnd':
        return 'Do Not Disturb';
      default:
        return 'Offline';
    }
  };

  return (
    <motion.button
      className="discord-status"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="status-indicator-wrapper">
        <motion.div
          className="status-indicator"
          style={{ backgroundColor: getStatusColor(status?.discord_status) }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <span className="status-text">Discord: {getStatusText()}</span>
    </motion.button>
  );
};

export default DiscordStatus;
