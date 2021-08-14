public with sharing class CustomPagination {
  @AuraEnabled
  public static Integer TotalRecord() {
    return [SELECT COUNT() FROM Case];
  }

  @AuraEnabled(Cacheable=true)
  public static List<Case> getCaseList(Integer v_Offest, Integer v_pagesize) {
    return [
      SELECT id, casenumber, subject
      FROM case
      LIMIT :v_pagesize
      OFFSET :v_Offest
    ];
  }

  @AuraEnabled(Cacheable=true)
  public static Integer getNext(Integer v_Offset, Integer v_pagesize) {
    v_Offset += v_pagesize;
    return v_Offset;
  }

  @AuraEnabled(Cacheable=true)
  public static Integer getPrevious(Integer v_Offset, Integer v_pagesize) {
    v_Offset -= v_pagesize;
    return v_Offset;
  }
}