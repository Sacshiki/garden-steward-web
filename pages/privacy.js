import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Privacy = (props) => {
  const [loaded, setLoaded] = useState(false)
  const { pageTransitionReadyToEnter } = props

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      pageTransitionReadyToEnter()
      setLoaded(true)
    }, 500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [pageTransitionReadyToEnter])

  if (!loaded) return null

  return (
    <div className="container bg-green page">
      <h1>Privacy Statement</h1>


      <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>


Information automatically collected

In Short:  Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our App.

We automatically collect certain information when you visit, use or navigate the App. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about who and when you use our App and other technical information. This information is primarily needed to maintain the security and operation of our App, and for our internal analytics and reporting purposes. 

The information we collect includes:
Log and Usage Data. Log and usage data is service-related, diagnostic usage and performance information our servers automatically collect when you access or use our App and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the App (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).
Device Data. We collect device data such as information about your computer, phone, tablet or other device you use to access the App. Depending on the device used, this device data may include information such as your IP address (or proxy server), device application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system configuration information.
Location Data. We collect information data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type of settings of the device you use to access the App. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Locations settings on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.

Information collected through our App

In Short:  We collect information regarding your mobile device, push notifications, when you use our App.

If you use our App, we also collect the following information:
Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's microphone, camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
The information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.


<h3>2. HOW DO WE USE YOUR INFORMATION?</h3>

In Short:  We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.

We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.

<h4>We use the information we collect or receive:</h4>

To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.

To post testimonials. We post testimonials on our App that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the consent of the testimonial. If you wish to update, or delete your testimonial, please contact us at volunteer@sacshiki.com and be sure to include your name, testimonial location, and contact information.

Request feedback. We may use your information to request feedback and to contact you about your use of our App.

To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.

To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.

To send administrative information to you. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.

To protect our Services. We may use your information as part of our efforts to keep our App safe and secure (for example, for fraud monitoring and prevention).

To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.

To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.

Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the App.

Administer prize draws and competitions. We may use your information to administer prize draws and competitions when you elect to participate in our competitions.

To deliver and facilitate delivery of services to the user. We may use your information to provide you with the requested service.

To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.

To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our App, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).

Deliver targeted advertising to you. We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.




<h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>

In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.

We may process or share your data that we hold based on the following legal basis:
<ul>
    <li>Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.</li>
    <li>
    Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.

    </li>
    <li>
    Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
    </li>
    <li>
    Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).

    </li>
    <li>
    Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.

    </li>
    More specifically, we may need to process your data or share your personal information in the following situations:
    <li>
    Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.    
</li>
</ul>







<h3>4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h3>

In Short:  We may transfer, store, and process your information in countries other than your own.

Our servers are located in. If you are accessing our App from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?" above), in and other countries.

If you are a resident in the European Economic Area, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.



<h3>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>

In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.


<h3>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>

In Short:  We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our App is at your own risk. You should only access the App within a secure environment.



<h3>7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>

In Short:  You may review, change, or terminate your account at any time.

If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.

If you are resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.


If you have questions or comments about your privacy rights, you may email us at volunteer@sacshiki.com.


<h4>Account Information</h4>
If you would at any time like to review or change the information in your account or terminate your account, you can:

    ■  Contact us using the contact information provided.

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.

Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:

    ■  Access your account settings and update your preferences.



<h3>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.



<h3>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>

In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.

California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.

If you are under 18 years of age, reside in California, and have a registered account with the App, you have the right to request removal of unwanted data that you publicly post on the App. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the App, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).  



<h3>10. DO WE MAKE UPDATES TO THIS NOTICE?</h3>

In Short:  Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.



<h3>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>

If you have questions or comments about this notice, you may email us at volunteer@sacshiki.com 


<h3>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>

Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking here. We will respond to your request within 30 days.


<hr />
      <Link href="/">
        <a className="btn btn-light">Go back home</a>
      </Link>
    </div>
  )
}

Privacy.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Privacy.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default Privacy