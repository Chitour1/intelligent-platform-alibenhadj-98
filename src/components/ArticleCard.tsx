
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl?: string;
}

const ArticleCard = ({ id, title, date, readTime, excerpt, imageUrl }: ArticleCardProps) => {
  return (
    <div className="article-card group">
      {imageUrl && (
        <div className="overflow-hidden aspect-video">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/articles/${id}`}>
          <h3 className="text-lg font-bold text-navy-dark hover:text-gold transition-colors duration-300 mb-2">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
          <div className="flex items-center">
            <Calendar size={14} className="ml-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="ml-1" />
            {readTime}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          to={`/articles/${id}`} 
          className="inline-flex items-center font-medium text-gold hover:text-gold-dark mt-auto"
        >
          قراءة المقال كاملاً
          <span className="ml-1">←</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
