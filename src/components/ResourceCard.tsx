
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Users, Clock, BookOpen, Video, FileText, Code, Zap, Award } from 'lucide-react';
import { Resource, platformLogos } from '@/data/resourcesDatabase';

interface ResourceCardProps {
  resource: Resource;
  showPlatform?: boolean;
  compact?: boolean;
}

export const ResourceCard = ({ resource, showPlatform = true, compact = false }: ResourceCardProps) => {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'interactive': return <Zap className="w-4 h-4" />;
      case 'practice': return <Award className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  if (compact) {
    return (
      <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            {getResourceIcon(resource.type)}
          </div>
          <div>
            <h4 className="font-medium text-white text-sm">{resource.title}</h4>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              {showPlatform && (
                <span className="flex items-center space-x-1">
                  <span>{platformLogos[resource.platform] || '📚'}</span>
                  <span>{resource.platform}</span>
                </span>
              )}
              <Badge className={getDifficultyColor(resource.difficulty)} variant="secondary">
                {resource.difficulty}
              </Badge>
              {resource.free && (
                <Badge className="bg-green-600/20 text-green-400 text-xs">
                  Free
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              {getResourceIcon(resource.type)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white mb-1">{resource.title}</h3>
              {resource.author && (
                <p className="text-slate-400 text-sm mb-2">by {resource.author}</p>
              )}
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">{resource.description}</p>
              
              <div className="flex items-center space-x-3 mb-3">
                {showPlatform && (
                  <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    <span>{platformLogos[resource.platform] || '📚'}</span>
                    <span>{resource.platform}</span>
                  </div>
                )}
                <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {resource.duration}
                </Badge>
                <Badge className={getDifficultyColor(resource.difficulty)} variant="secondary">
                  {resource.difficulty}
                </Badge>
                {resource.free && (
                  <Badge className="bg-green-600/20 text-green-400 text-xs">
                    Free
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span>{resource.rating}</span>
                </div>
                {resource.views && (
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{resource.views}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {resource.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                    {tag}
                  </Badge>
                ))}
                {resource.tags.length > 4 && (
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                    +{resource.tags.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 text-sm capitalize">{resource.type}</span>
          </div>
          <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            <ExternalLink className="w-4 h-4 mr-1" />
            Open Resource
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
