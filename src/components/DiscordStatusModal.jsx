import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './DiscordStatusModal.css';

const DiscordStatusModal = ({ isOpen, onClose, userId }) => {
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

    if (isOpen) {
      fetchStatus();
      const interval = setInterval(fetchStatus, 30000);
      return () => clearInterval(interval);
    }
  }, [userId, isOpen]);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="modal-wrapper">
            <motion.div
              className="modal-content discord-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="modal-close" onClick={onClose}>
                <IoClose />
              </button>

              <div className="modal-header">
                <h2>Discord Status</h2>
                <div className="modal-divider" />
              </div>

              <div className="modal-body">
                {loading ? (
                  <div className="status-loading">Loading status...</div>
                ) : status ? (
                  <div className="discord-details">
                    <div className="status-main">
                      <div className="status-indicator-large" style={{ backgroundColor: getStatusColor(status.discord_status) }} />
                      <div className="status-info">
                        <h3>{status.discord_user?.username || 'Unknown User'}</h3>
                        <p className="status-label">{getStatusLabel(status.discord_status)}</p>
                      </div>
                    </div>

                    {status.activities && status.activities.length > 0 && (
                      <div className="activities-section">
                        <h4>Activities</h4>
                        {status.activities.map((activity, index) => (
                          <div key={index} className="activity-item">
                            {activity.type === 4 && activity.state && (
                              <div className="custom-status">
                                {activity.emoji && (
                                  <span className="status-emoji">
                                    {activity.emoji.name}
                                  </span>
                                )}
                                <span className="status-state">{activity.state}</span>
                              </div>
                            )}
                            
                            {activity.type !== 4 && (
                              <div className="game-activity">
                                <strong>{activity.name}</strong>
                                {activity.details && <p>{activity.details}</p>}
                                {activity.state && <p>{activity.state}</p>}
                                {activity.timestamps && activity.timestamps.start && (
                                  <p className="elapsed-time">
                                    Started {new Date(activity.timestamps.start).toLocaleTimeString()}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {status.spotify && (
                      <div className="spotify-section">
                        <h4>🎵 Listening to Spotify</h4>
                        <div className="spotify-details">
                          {status.spotify.album_art_url && (
                            <img 
                              src={status.spotify.album_art_url} 
                              alt="Album art" 
                              className="album-art"
                            />
                          )}
                          <div className="spotify-info">
                            <p className="song-title">{status.spotify.song}</p>
                            <p className="artist">by {status.spotify.artist}</p>
                            <p className="album">on {status.spotify.album}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="status-offline">
                    <p>Discord status unavailable</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DiscordStatusModal;
