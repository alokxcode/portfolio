import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DiscordStatusDropdown.css';

const DiscordStatusDropdown = ({ isOpen, onClose, userId }) => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

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

    if (isOpen) {
      fetchStatus();
      const interval = setInterval(fetchStatus, 30000);
      return () => clearInterval(interval);
    }
  }, [userId, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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

  const getStatusLabel = (discordStatus) => {
    switch (discordStatus) {
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

  const getCurrentActivity = () => {
    if (!status || !status.activities || status.activities.length === 0) {
      return null;
    }

    const customStatus = status.activities.find(a => a.type === 4);
    if (customStatus && customStatus.state) {
      return {
        type: 'custom',
        emoji: customStatus.emoji?.name,
        text: customStatus.state,
        createdAt: customStatus.created_at
      };
    }

    const mainActivity = status.activities.find(a => a.type !== 4);
    if (mainActivity) {
      return {
        type: 'activity',
        name: mainActivity.name,
        details: mainActivity.details,
        state: mainActivity.state,
        timestamps: mainActivity.timestamps
      };
    }

    return null;
  };

  const getActivityDuration = (timestamps) => {
    if (!timestamps || !timestamps.start) return null;
    const start = new Date(timestamps.start);
    const now = new Date();
    const diffMs = now - start;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) {
      return `${diffMins}m`;
    }
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours}h ${mins}m`;
  };

  const getLastSeen = () => {
    if (!status || !status.activities) return null;
    
    // Try to get the most recent activity timestamp
    const activities = status.activities.filter(a => a.created_at);
    if (activities.length === 0) return null;
    
    const mostRecent = Math.max(...activities.map(a => a.created_at));
    const lastSeenDate = new Date(mostRecent);
    const now = new Date();
    const diffMs = now - lastSeenDate;
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) {
      const hours = Math.floor(diffMins / 60);
      return `${hours}h ago`;
    }
    const days = Math.floor(diffMins / 1440);
    return `${days}d ago`;
  };

  const activity = getCurrentActivity();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className="discord-dropdown"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {loading ? (
            <div className="dropdown-loading">Loading...</div>
          ) : status ? (
            <div className="dropdown-content">
              <div className="dropdown-header">
                <div 
                  className="dropdown-status-dot" 
                  style={{ backgroundColor: getStatusColor(status.discord_status) }}
                />
                <span className="dropdown-username">{status.discord_user?.username || 'Unknown'}</span>
              </div>
              
              <div className="dropdown-status-label">
                {getStatusLabel(status.discord_status)}
                {status.discord_status === 'offline' && getLastSeen() && (
                  <span className="last-seen"> • Last seen {getLastSeen()}</span>
                )}
              </div>

              {activity && (
                <div className="dropdown-activity">
                  {activity.type === 'custom' && (
                    <div className="activity-custom">
                      {activity.emoji && <span className="activity-emoji">{activity.emoji}</span>}
                      <span className="activity-text">{activity.text}</span>
                    </div>
                  )}
                  {activity.type === 'activity' && (
                    <div className="activity-game">
                      <div className="activity-name">{activity.name}</div>
                      {activity.details && <div className="activity-details">{activity.details}</div>}
                      {activity.state && <div className="activity-state">{activity.state}</div>}
                      {activity.timestamps && getActivityDuration(activity.timestamps) && (
                        <div className="activity-duration">⏱ {getActivityDuration(activity.timestamps)}</div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {status.spotify && (
                <div className="dropdown-spotify">
                  <div className="spotify-icon">🎵</div>
                  <div className="spotify-info">
                    <div className="spotify-song">{status.spotify.song}</div>
                    <div className="spotify-artist">{status.spotify.artist}</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="dropdown-error">Unable to fetch status</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscordStatusDropdown;
