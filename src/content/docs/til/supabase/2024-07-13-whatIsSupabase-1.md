---
title: Supabase 소개
author: Seungwoo Choi
lastUpdated: 2024-07-13
head:
  - tag: meta
    attrs:
      {
        property: 'keywords',
        content: 'supabase, 수파베이스, supabase 사용법, supabase란?, what is supabase',
      }
  - tag: meta
    attrs: { property: 'og:image', content: '/images/til/whatIsSupabase.webp' }
---

> 혹시 **Supabase**라고 들어보신 적 있으신가요?

Supabase는 Firebase 대안으로 나온 PostgreSQL 기반 Baas 오픈 소스입니다. Supabase를 사용하면 정말 손쉽게 서버 없이 웹 또는 앱 서비스를 만드실 수 있습니다.

한 번 간단하게 Supabase에 대해서 알아볼까요?

## 편리하게 다룰 수 있는 테이블

Supabase를 사용하며 가장 편리하다고 느낀 것이 바로 이것입니다.

![편리하게 다룰 수 있는 테이블](/images/til/whatIsSupabase/image1.webp)

UI를 통해 테이블 관리를 도와주는 Table Editor, SQL문을 통해 테이블 관리를 도와주는 SQL Editor. 이렇게 테이블을 편리하게 다루기 위한 2가지 기능을 제공해 주고 있습니다.

Table Editor 에서는 테이블을 만들거나, 수정하거나, 삭제하는 등의 모든 작업을 빠르게 진행해 볼 수 있습니다. Table을 다루는 모든 과정이 매우 직관적으로 구성되어 있어 큰 어려움 없이 사용할 수 있습니다.

SQL Editor 에서는 간단한 쿼리문을 날려볼 수 있고, 테이블에 Function과 Trigger를 설정해 줄 수도 있습니다.

## 테이블 보안

Supabase에서는 기본적으로 테이블에 RLS(Row Level Security)를 적용하게 되어 있습니다. RLS는 모든 메서드 마다 특정 대상과 조건을 지정해서 정책을 설정해 줄 수 있습니다.

```sql
create policy "Enable read access for all users"
on "public"."feedback"
as PERMISSIVE
for SELECT
to public
using (
  true
);
```

예를 들어 위와 같이 RLS 정책을 만들어 주게 되면, feedback 테이블에 모든 유저들이 SELECT할 수 있게 됩니다.
이 외에도 서비스에 인증된 유저들만, 어드민만, 자기 자신만 접근할 수 있도록 설정해 줄 수 있습니다.

한 테이블에 RLS 정책을 원하는대로 여러개 설정해 주어 간단하게 보안을 적용시킬 수 있습니다.
