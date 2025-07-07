import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useLanguage } from '../../contexts/LanguageContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Para GitHub Pages: abrir cliente de email
    const subject = encodeURIComponent('Contato ZowT - Website');
    const body = encodeURIComponent(`
Nome: ${data.name}
Email: ${data.email}
Mensagem: ${data.message}

---
Enviado via website ZowT
    `);
    
    window.location.href = `mailto:contato@zowt.com.br?subject=${subject}&body=${body}`;
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            {...register('name')}
            placeholder={t('Nome completo')}
            className="w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Input
            {...register('email')}
            type="email"
            placeholder={t('Email profissional')}
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Textarea
          {...register('message')}
          placeholder={t('Descreva seu caso ou necessidade...')}
          className="w-full min-h-[120px]"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('Enviando...') : t('Enviar Mensagem')}
      </Button>
    </form>
  );
}
