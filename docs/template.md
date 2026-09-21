---
layout: doc
outline: deep
author: author
title: title
date: '2026-09-10'

---
<script setup>
import { useData } from 'vitepress'
import { formatDate } from './.vitepress/theme/formatDate'

const { frontmatter } = useData()
const formattedDate = formatDate(frontmatter.value.date)
</script>


# {{ $frontmatter.title }}  
*Tác giả: {{ $frontmatter.author }}*   
Date: {{ formattedDate }}
