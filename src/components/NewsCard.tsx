
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

const NewsCard = ({ id, title, date, excerpt, imageUrl, category }: NewsCardProps) => {
  return (
    <div className="card group">
      <div className="overflow-hidden aspect-video">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gold/10 text-gold-dark px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="ml-1" />
            {date}
          </div>
        </div>
        <Link to={`/news/${id}`}>
          <h3 className="text-lg font-bold text-navy-dark hover:text-gold transition-colors duration-300 mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        <Link 
          to={`/news/${id}`} 
          className="inline-flex items-center font-medium text-gold hover:text-gold-dark"
        >
          اقرأ المزيد
          <span className="ml-1">←</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
