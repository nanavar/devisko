<script setup>
import TheNavbarEN from "../../components/English/TheNavbarEN.vue";
import TheFooterEN from "../../components/English/TheFooterEN.vue";
</script>

<template>
  <TheNavbarEN />
  <main class="privacy">
    <div>
      <h2 class="page-title">Privacy Policy</h2>
    </div>
    <div class="container">
      <p>
        Thank you for choosing us and entrusting us with your personal
        information. We take your privacy seriously and are committed to
        complying with the General Data Protection Regulation (GDPR) and other
        applicable data protection laws in the European Union.
      </p>
      <h4> Information we collect</h4>
      <p>
        We collect personal information that you provide to us through our
        website, such as your name, email address and any other information that
        you provide when you fill out our forms.
      </p>
      <h4>How we use your information</h4>
      <p
        >We use your personal information to respond to your inquiries, provide
        you with information about our products and services, and communicate
        with you about our business. We may also use your information to improve
        our website and services and to prevent fraud and abuse.
      </p>
      <h4>Legal basis of processing</h4>
      <p>
        Our legal basis for processing your personal information is typically
        based on your consent, as we will ask for your consent before collecting
        your personal information. We may also process your personal information
        if it is necessary for the performance of a contract or for our
        legitimate interests, provided that such interests do not override your
        fundamental rights and freedoms.
      </p>
      <h4>How we share your information</h4>
      <p>
        We may share your personal information with our service providers and
        business partners who help us operate our website and provide our
        services. We may also share your information if required by law or if we
        believe that such action is necessary to protect our rights or the
        rights of others.
      </p>
      <h4>Data retention</h4>
      <p>
        We will retain your personal information for as long as necessary to
        fulfill the purposes for which it was collected, or as required by law.
        We may retain some information for a longer period if necessary to
        comply with legal or regulatory obligations, to resolve disputes, or to
        enforce our agreements.
      </p>
      <h4>Your rights</h4>
      <p>
        You have the right to request access to your personal information, as
        well as to request that we correct, update, or delete it. You also have
        the right to object to our processing of your personal information or to
        request that we restrict our processing of your personal information.
        You can exercise these rights by contacting us using the contact
        information provided on our website.
      </p>
      <h4> Security </h4>
      <p
        >We take appropriate measures to protect your personal information from
        unauthorized access, disclosure, alteration, or destruction. However, no
        security system is impenetrable, and we cannot guarantee the security of
        your personal information.</p
      >
      <h4>Updates to policy</h4>
      <p
        >We may update this privacy policy from time to time. If we make
        significant changes to the policy, we will notify you by posting a
        notice on our website or by other means.</p
      >
      <h4> Contact us </h4>
      <p>
        If you have any questions or concerns about our privacy practices or
        this policy, please contact us using the contact information provided on
        our website.
      </p>
    </div>
  </main>
  <TheFooterEN />
</template>

<style scoped>
.privacy .container h4 {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin: 10px auto;
}

.privacy .container p {
  padding-bottom: 15px;
}
</style>
