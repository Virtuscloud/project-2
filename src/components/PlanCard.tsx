import React from 'react';
import { Cpu, HardDrive, MapPin, CheckCircle, ArrowRight, Star, Zap, Shield, Crown, Gem, Sparkles } from 'lucide-react';

interface PlanCardProps {
  plan: {
    name: string;
    price: string;
    ram: string;
    cpu: string;
    storage: string;
    location: string;
    features?: string[];
    addons?: {
      unit: string;
      backup: string;
    };
    planType?: string;
  };
  planType: 'budget' | 'powered' | 'premium';
  isPopular?: boolean;
  theme?: string;
  onSelect?: (plan: any) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  plan, 
  planType, 
  isPopular = false, 
  theme = 'dark', 
  onSelect 
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          card: 'bg-white/80 backdrop-blur-xl border-white/40',
          text: 'text-gray-900',
          textSecondary: 'text-gray-600',
          textMuted: 'text-gray-500',
          button: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
          glowButton: 'shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
        };
      case 'glass':
        return {
          card: 'bg-white/5 backdrop-blur-xl border-white/10',
          text: 'text-white',
          textSecondary: 'text-white/80',
          textMuted: 'text-white/60',
          button: 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600/80 hover:to-pink-600/80 backdrop-blur-sm',
          glowButton: 'shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
        };
      default: // dark
        return {
          card: 'bg-white/5 backdrop-blur-xl border-white/10',
          text: 'text-white',
          textSecondary: 'text-gray-300',
          textMuted: 'text-gray-400',
          button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
          glowButton: 'shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
        };
    }
  };

  const themeStyles = getThemeClasses();

  const getPlanTypeColor = () => {
    switch (planType) {
      case 'budget':
        return 'border-green-500/30 hover:border-green-500/50';
      case 'powered':
        return 'border-orange-500/30 hover:border-orange-500/50';
      case 'premium':
        return 'border-purple-500/30 hover:border-purple-500/50';
      default:
        return 'border-white/20 hover:border-white/30';
    }
  };

  const getPlanBadge = () => {
    switch (planType) {
      case 'budget':
        return (
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center animate-pulse">
            <Shield className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Free DDoS Protection</span>
            <span className="sm:hidden">DDoS Protected</span>
          </div>
        );
      case 'powered':
        return (
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center animate-pulse">
            <Zap className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Powered by Ryzen 9</span>
            <span className="sm:hidden">Ryzen 9</span>
          </div>
        );
      case 'premium':
        return (
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center animate-pulse">
            <Crown className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Premium Node Quality</span>
            <span className="sm:hidden">Premium</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getPlanIcon = () => {
    switch (planType) {
      case 'budget':
        return <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />;
      case 'powered':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />;
      case 'premium':
        return <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />;
      default:
        return <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />;
    }
  };

  return (
    <div className={`${themeStyles.card} p-4 sm:p-6 lg:p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative border ${getPlanTypeColor()}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-pulse">
            <Sparkles className="w-3 h-3 inline mr-1" />
            Most Popular
          </div>
        </div>
      )}

      {/* Plan Badge */}
      <div className="flex justify-center mb-3 sm:mb-4">
        {getPlanBadge()}
      </div>

      {/* Plan Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex justify-center mb-2 sm:mb-3">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
            planType === 'budget' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
            planType === 'powered' ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
            'bg-gradient-to-r from-purple-500 to-pink-500'
          } shadow-lg animate-pulse`}>
            {getPlanIcon()}
          </div>
        </div>
        <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold ${themeStyles.text} mb-2`}>{plan.name}</h4>
        <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeStyles.text} mb-1`}>
          {plan.price.replace(/\/mo.*/, '')}
        </div>
        <div className={`${themeStyles.textSecondary} text-xs sm:text-sm`}>per month</div>
      </div>
      
      {/* Specs */}
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <div className={`flex items-center ${themeStyles.textSecondary} text-xs sm:text-sm`}>
          <Cpu className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-400 flex-shrink-0" />
          <span className="truncate">{plan.ram} RAM • {plan.cpu}</span>
        </div>
        <div className={`flex items-center ${themeStyles.textSecondary} text-xs sm:text-sm`}>
          <HardDrive className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-400 flex-shrink-0" />
          <span className="truncate">{plan.storage}</span>
        </div>
        <div className={`flex items-center ${themeStyles.textSecondary} text-xs sm:text-sm`}>
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-400 flex-shrink-0" />
          <span className="truncate">{plan.location}</span>
        </div>
      </div>

      {/* Features */}
      {plan.features && (
        <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          {plan.features.map((feature, idx) => (
            <div key={idx} className={`flex items-center ${themeStyles.textSecondary} text-xs sm:text-sm`}>
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-400 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* Add-ons */}
      {plan.addons && (
        <div className={`${themeStyles.card} p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 border border-white/10`}>
          <h5 className={`text-xs sm:text-sm font-semibold ${themeStyles.text} mb-2 sm:mb-3`}>Add-ons Available:</h5>
          <div className={`text-xs ${themeStyles.textSecondary} space-y-1`}>
            <div>Extra Unit: {plan.addons.unit}/unit</div>
            <div className="text-xs opacity-75">(1 GB RAM + 50% CPU + 5 GB SSD)</div>
            <div>Backup Slot: {plan.addons.backup}/slot</div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={() => onSelect && onSelect(plan)}
        className={`w-full ${themeStyles.button} ${themeStyles.glowButton} text-white py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group text-xs sm:text-sm lg:text-base`}
      >
        Choose Plan
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default PlanCard;