function mailCount(data) {
  const EMAIL_DELIMITER = '##||##';
  const PART_DELIMITER = '#/#';

  let emails = data.split(EMAIL_DELIMITER).map(email => {
    email = email.replace(/\n/g, '');
    email = email.split(PART_DELIMITER);

    return {
      sender: email[0],
      subject: email[1],
      date: new Date(email[2]),
      recipient: email[3],
      body: email[4],
    }
  })

  let dates = emails.map(email => email.date);
  dates.sort((a, b) => a.getTime() - b.getTime());

  console.log(`Count of Email: ${emails.length}`);
  console.log(`Date Range: ${dates[0].toDateString()} - ${dates[dates.length - 1].toDateString()}`);
}

mailCount(emailData);