export default function TermsPage() {
  return (
    <>
      <style>{`
        .terms-content h3 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
          color: #111;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .terms-content h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          color: #555;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .terms-content p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .terms-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .terms-content li {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.8;
        }
        .terms-content a {
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>

      <section className="bg-white min-h-screen px-6 md:px-16 pt-32 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">

          {/* Left — sticky title */}
          <div className="md:w-64 shrink-0 md:sticky md:top-32">
            <h1 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Terms<br />of Use
            </h1>
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">Last updated April 10, 2024</p>
          </div>

          {/* Right — content */}
          <div className="flex-1 terms-content">

            <h3>Terms and Conditions</h3>

            <h3>Agreement to Our Legal Terms</h3>
            <p>We are POSHSTUDIO ("Company," "we," "us," "our").</p>
            <p>We operate the website https://poshstudio.co.uk (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
            <p>You can contact us by email at support@poshstudio.co.uk.</p>
            <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and POSHSTUDIO, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            <p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.</p>
            <p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>
            <p>We recommend that you print a copy of these Legal Terms for your records.</p>

            <h3>1. Our Services</h3>
            <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
            <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>

            <h3>2. Intellectual Property Rights</h3>
            <h4>Our intellectual property</h4>
            <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
            <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
            <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>

            <h4>Your use of our Services</h4>
            <p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.</p>
            <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
            <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to: support@poshstudio.co.uk. If we grant you permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors and ensure that any copyright or proprietary notice appears or is visible on posting, reproduction, or display of our Content.</p>
            <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
            <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>

            <h4>Your submissions</h4>
            <p>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the rights you give us and the obligations you have when you post or upload any content through the Services.</p>
            <p>Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
            <p>You are responsible for what you post or upload. By sending us Submissions through any part of the Services you confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading. You warrant that any such Submission is original to you or that you have the necessary rights and licenses to submit such Submissions.</p>
            <p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of this section, any third party's intellectual property rights, or applicable law.</p>

            <h3>3. User Representations</h3>
            <p>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.</p>
            <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>

            <h3>4. Purchases and Payment</h3>
            <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We may change prices at any time. All payments shall be in GBP unless otherwise stated.</p>
            <p>You agree to pay all charges at the prices then in effect for your purchases and any applicable fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
            <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>

            <h3>5. Policy</h3>
            <p>All sales are final and no refund will be issued unless otherwise agreed in writing by POSHSTUDIO.</p>

            <h3>6. Prohibited Activities</h3>
            <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
            <ul>
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
              <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Engage in unauthorized framing of or linking to the Services.</li>
              <li>Upload or transmit viruses, Trojan horses, or other harmful material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Delete the copyright or other proprietary rights notice from any Content.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            </ul>

            <h3>7. Disclaimer</h3>
            <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.</p>
            <p>We make no warranties or representations about the accuracy or completeness of the Services' content and we will assume no liability or responsibility for any errors or omissions in the content of the Services.</p>

            <h3>8. Limitations of Liability</h3>
            <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

            <h3>9. Governing Law</h3>
            <p>These Legal Terms shall be governed by and defined following the laws of England and Wales. POSHSTUDIO and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>

            <h3>10. Contact Us</h3>
            <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
            <p>
              POSHSTUDIO<br />
              Email: support@poshstudio.co.uk
            </p>

          </div>
        </div>
      </section>
    </>
  );
}