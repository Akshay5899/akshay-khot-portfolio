'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import axios from 'axios';
import { Card } from '@/components/ui/Card';
import { Input, TextArea, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { apiService } from '@/services/api';
import { useToast } from '@/providers/toast-provider';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().min(5, 'Phone number must be valid').max(20, 'Phone too long').optional().or(z.literal('')),
  scopingArea: z.string().min(1, 'Please select a valid scoping area'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SCOPING_OPTIONS = [
  { value: '', label: '-- Select Area of Scoping --' },
  { value: 'custom-software', label: 'Custom Software / Web Architecture' },
  { value: 'mobile-development', label: 'Mobile Application Development' },
  { value: 'ui-ux-design', label: 'UI/UX & Interactive Prototyping' },
  { value: 'ai-automation', label: 'AI Systems & Cognitive Automation' },
  { value: 'erp-crm-integration', label: 'ERP/CRM Platform Integration' },
  { value: 'security-audit', label: 'Cybersecurity Penetration Audit' },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      scopingArea: '',
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiService.submitContact(data);
      if (response.success) {
        toast(response.message, 'success');
        reset({ scopingArea: '' });
      } else {
        toast(response.error || 'Something went wrong.', 'error');
      }
    } catch (err: unknown) {
      let errMsg = 'Failed to submit form. Please check network connectivity.';
      if (axios.isAxiosError(err)) {
        errMsg = err.response?.data?.error || errMsg;
      }
      toast(errMsg, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 md:p-10 border border-slate-800/40 dark:border-slate-900/60 bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-md relative overflow-hidden shadow-2xl shadow-indigo-950/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="flex flex-col gap-2 mb-8 text-left">
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">SCOPING PORTAL</span>
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">Transmit Project Parameters</h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          Provide your system requirements below. Our engineering squad will perform a diagnostic review within 12 cycles.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Name / Alias"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            label="Digital Address"
            placeholder="john@example.com"
            type="email"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Phone Parameter"
            placeholder="+1 (555) 000-0000"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <Select
            label="Area of Scoping"
            options={SCOPING_OPTIONS}
            error={errors.scopingArea?.message}
            {...register('scopingArea')}
          />
        </div>

        <Input
          label="Subject Parameter"
          placeholder="e.g., Multi-Cloud Kubernetes Scaling"
          error={errors.subject?.message}
          {...register('subject')}
        />

        <TextArea
          label="Operational Requirements"
          placeholder="Detail your load requirements, timeline limits, compliance standards, or security audits..."
          error={errors.message?.message}
          {...register('message')}
        />

        <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full group">
          <span className="flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-wider w-full">
            Transmit Signal <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Button>
      </form>
    </Card>
  );
};
