export function DiscardMetaFields(schoolFields, metaFields) {
  for (let metafield of metaFields) {
    schoolFields = schoolFields.filter((field) => field !== metafield);
  }
  return schoolFields;
}
