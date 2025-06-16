import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: false,
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
 values = [
    {
      icon: '🎨',
      title: 'Authenticity',
      description: 'Every piece is thoroughly researched and authenticated, ensuring you receive genuine Victorian furniture with documented provenance.'
    },
    {
      icon: '🔨',
      title: 'Expert Restoration',
      description: 'Our master craftsmen use traditional techniques and materials to restore each piece to its original beauty while preserving its historical integrity.'
    },
    {
      icon: '🌟',
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in selection, restoration, and presentation, ensuring every piece meets our exacting quality criteria.'
    },
    {
      icon: '💚',
      title: 'Sustainability',
      description: 'By restoring and preserving antique furniture, we contribute to sustainable living and reduce environmental impact.'
    }
  ];

  teamMembers = [
    {
      name: 'Margaret Thornfield',
      role: 'Founder & Chief Curator',
      bio: 'With over 40 years in the antique furniture business, Margaret has an unparalleled eye for authentic Victorian pieces.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'James Richardson',
      role: 'Master Restorer',
      bio: 'A third-generation furniture restorer, James specializes in Victorian woodworking techniques and traditional finishes.',
      image: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emma Hartwell',
      role: 'Acquisitions Manager',
      bio: 'Emma travels across Europe sourcing exceptional pieces, building relationships with collectors and estate agents.',
      image: 'https://images.pexels.com/photos/1181224/pexels-photo-1181224.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  processSteps = [
    {
      title: 'Sourcing & Selection',
      description: 'We carefully source pieces from reputable estates, auctions, and private collections, selecting only the finest examples of Victorian craftsmanship.'
    },
    {
      title: 'Authentication & Research',
      description: 'Each piece undergoes thorough authentication and historical research to verify its provenance and significance.'
    },
    {
      title: 'Professional Assessment',
      description: 'Our experts assess the condition and restoration requirements, creating a detailed plan for each piece.'
    },
    {
      title: 'Expert Restoration',
      description: 'Using traditional techniques and period-appropriate materials, our master craftsmen restore each piece to its original glory.'
    },
    {
      title: 'Quality Control',
      description: 'Final inspection ensures every piece meets our exacting standards before being offered to our discerning clients.'
    }
  ];

  awards = [
    {
      title: 'Antique Dealer of the Year',
      year: '2023',
      description: 'British Antique Dealers Association'
    },
    {
      title: 'Excellence in Restoration',
      year: '2022',
      description: 'Furniture History Society'
    },
    {
      title: 'Heritage Preservation Award',
      year: '2021',
      description: 'Victorian Society'
    },
    {
      title: 'Outstanding Service Award',
      year: '2020',
      description: 'Professional Numismatists Guild'
    }
  ];
}

