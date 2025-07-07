import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('message.success'),
        description: t('message.success'),
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: () => {
      toast({
        title: t('message.error'),
        description: t('message.error'),
        variant: 'destructive',
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bright-blue">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group animate-fadeInUp">
            <div className="absolute -inset-1 bg-gradient-to-r from-bright-blue/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative glass p-8 rounded-2xl border border-slate-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.name')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-bright-blue focus:ring-1 focus:ring-bright-blue"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.email')}
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-bright-blue focus:ring-1 focus:ring-bright-blue"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-bright-blue focus:ring-1 focus:ring-bright-blue resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-bright-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                {contactMutation.isPending ? 'Enviando...' : t('contact.form.submit')}
              </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-bright-blue h-6 w-6 mr-4" />
                  <span className="text-gray-300">contato@lucasalberto.com</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="text-bright-blue h-6 w-6 mr-4" />
                  <span className="text-gray-300">+55 (11) 99999-9999</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {t('contact.whatsapp.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('contact.whatsapp.desc')}
              </p>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('contact.whatsapp.button')}
              </a>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {t('contact.hours.title')}
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>{t('contact.hours.weekdays')}</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.saturday')}</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.hours.sunday')}</span>
                  <span>{t('contact.hours.closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
