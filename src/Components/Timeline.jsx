import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const Timeline = ({ projets }) => {
  const triprojets = [...projets].sort((a, b) => new Date(a.Date) - new Date(b.Date));

  return (
    <div className="timeline-vertical-container">
      {triprojets.map((projet, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`timeline-vertical-item ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <span className="timeline-date">{projet.Date}</span>
              <h3>Titre: {projet.titre}</h3>
              <p>Description: {projet.Desc}</p>
              <p><strong>Langage :</strong> {Array.isArray(projet.langage) ? projet.langage.join(', ') : projet.langage || 'Non spécifié'}</p>
              <p><strong>IDE :</strong> {Array.isArray(projet.ide) ? projet.ide.join(', ') : projet.ide || 'Non spécifié'}</p>
              <p><strong>Librairies :</strong> {Array.isArray(projet.biblio) ? projet.biblio.join(', ') : projet.biblio || 'Aucune'}</p>
              {projet.lien && (
                <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="timeline-link">
                  Voir sur GitHub
                </a>
              )}
              {projet.image && (
                <img
                    src={
                    typeof projet.image === 'string'
                        ? projet.image
                        : URL.createObjectURL(projet.image)
                    }
                    alt={`Illustration du projet ${projet.titre}`}
                    className="timeline-image"
                />
                )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
