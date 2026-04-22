export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .privacy-content h3 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
          color: #111;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
        }
        .privacy-content h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          color: #555;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .privacy-content p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .privacy-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .privacy-content li {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.8;
        }
        .privacy-content em {
          color: #888;
          font-style: italic;
        }
        .privacy-content a {
          color: #111;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>

      <section className="bg-white min-h-screen px-6 md:px-16 pt-32 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">

          {/* Left sticky title */}
          <div className="md:w-64 shrink-0 md:sticky md:top-32">
            <h1 className="text-4xl md:text-5xl font-light text-black leading-tight">
              Privacy<br />Policy
            </h1>
            <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">Last updated April 10, 2024</p>
          </div>

          {/* Right content */}
          <div className="flex-1 privacy-content">

            <h3>Privacy Policy</h3>
            <p>This privacy notice for POSHSTUDIO ("we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you visit our website at https://poshstudio.co.uk or engage with us in other related ways including sales, marketing, or events.</p>
            <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@poshstudio.co.uk.</p>

            <h3>Summary of Key Points</h3>
            <p>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
            <p>Do we process any sensitive personal information? We do not process sensitive personal information.</p>
            <p>Do we receive any information from third parties? We do not receive any information from third parties.</p>
            <p>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            <p>How do we keep your information safe? We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
            <p>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
            <p>How do you exercise your rights? The easiest way to exercise your rights is by contacting us at support@poshstudio.co.uk. We will consider and act upon any request in accordance with applicable data protection laws.</p>

            <h3>1. What Information Do We Collect?</h3>
            <h4>Personal information you disclose to us</h4>
            <p><em>In Short: We collect personal information that you provide to us.</em></p>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. The personal information we collect may include the following:</p>
            <ul>
              <li>Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Job titles</li>
              <li>Company names</li>
            </ul>
            <p>Sensitive Information: We do not process sensitive information.</p>
            <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

            <h4>Information automatically collected</h4>
            <p><em>In Short: Some information such as your Internet Protocol (IP) address and browser and device characteristics is collected automatically when you visit our Services.</em></p>
            <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services.</p>
            <p>The information we collect includes:</p>
            <ul>
              <li>Log and Usage Data including your IP address, device information, browser type, and activity in the Services such as date and time stamps associated with your usage, pages and files viewed, searches and other actions you take.</li>
              <li>Device Data including information about your computer, phone, tablet, or other device you use to access the Services, such as your IP address, device and application identification numbers, location, browser type, and operating system.</li>
              <li>Location Data including information about your device's location which can be either precise or imprecise based on the type and settings of the device you use to access the Services.</li>
            </ul>

            <h3>2. How Do We Process Your Information?</h3>
            <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
            <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <ul>
              <li>To deliver and facilitate delivery of services to you.</li>
              <li>To respond to your enquiries and offer support.</li>
              <li>To send administrative information to you including details about our products and services, changes to our terms and policies.</li>
              <li>To fulfil and manage your orders, payments, and exchanges made through the Services.</li>
              <li>To request feedback and to contact you about your use of our Services.</li>
              <li>To send you marketing and promotional communications in accordance with your marketing preferences. You can opt out of our marketing emails at any time.</li>
              <li>To identify usage trends so we can improve our Services.</li>
              <li>To save or protect an individual's vital interest, such as to prevent harm.</li>
            </ul>

            <h3>3. What Legal Bases Do We Rely On to Process Your Information?</h3>
            <p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</em></p>
            <p>If you are located in the EU or UK, the General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on to process your personal information. We may rely on the following legal bases:</p>
            <ul>
              <li>Consent: We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
              <li>Performance of a Contract: We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you.</li>
              <li>Legitimate Interests: We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests, such as to send users information about our products and services, develop relevant content, and improve user experience.</li>
              <li>Legal Obligations: We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
              <li>Vital Interests: We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
            </ul>

            <h3>4. When and With Whom Do We Share Your Personal Information?</h3>
            <p><em>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</em></p>
            <p>We may need to share your personal information in the following situations:</p>
            <ul>
              <li>Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li>Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honour this privacy notice.</li>
              <li>Business Partners: We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            </ul>

            <h3>5. How Long Do We Keep Your Information?</h3>
            <p><em>In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</em></p>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise it.</p>

            <h3>6. How Do We Keep Your Information Safe?</h3>
            <p><em>In Short: We aim to protect your personal information through a system of organisational and technical security measures.</em></p>
            <p>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>

            <h3>7. What Are Your Privacy Rights?</h3>
            <p><em>In Short: In some regions such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information.</em></p>
            <p>In some regions, you have certain rights under applicable data protection laws. These may include the right to request access to and obtain a copy of your personal information, to request rectification or erasure, to restrict the processing of your personal information, and if applicable, to data portability.</p>
            <p>If you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. In the UK this is the Information Commissioner's Office (ICO).</p>
            <p>To withdraw your consent to our processing of your information, please contact us at support@poshstudio.co.uk. This will not affect the lawfulness of any processing carried out before you withdraw your consent.</p>

            <h3>8. Controls for Do-Not-Track Features</h3>
            <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. At this stage we do not respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>

            <h3>9. Do UK Residents Have Specific Privacy Rights?</h3>
            <p>If you are a resident of the United Kingdom, you are granted specific rights regarding access to your personal information under the UK GDPR. You may request to review, change, or terminate your account at any time by contacting us at support@poshstudio.co.uk.</p>

            <h3>10. Do We Make Updates to This Notice?</h3>
            <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

            <h3>11. How Can You Contact Us About This Notice?</h3>
            <p>If you have questions or comments about this notice, you may contact us at:</p>
            <p>
              POSHSTUDIO<br />
              Email: support@poshstudio.co.uk
            </p>

            <h3>12. How Can You Review, Update, or Delete the Data We Collect From You?</h3>
            <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by emailing support@poshstudio.co.uk.</p>

          </div>
        </div>
      </section>
    </>
  );
}