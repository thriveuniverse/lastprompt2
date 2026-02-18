"use strict";(()=>{var e={};e.id=976,e.ids=[976],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},71551:(e,t,i)=>{i.r(t),i.d(t,{originalPathname:()=>y,patchFetch:()=>x,requestAsyncStorage:()=>u,routeModule:()=>m,serverHooks:()=>f,staticGenerationAsyncStorage:()=>g});var r={};i.r(r),i.d(r,{POST:()=>c,dynamic:()=>d});var a=i(79182),n=i(72007),s=i(56719),o=i(93442),l=i(35970),p=i(55743);let d="force-dynamic";async function c(e){try{let{token:t}=await e.json();if(!t)return o.NextResponse.json({success:!1,message:"Invalid token"},{status:400});let i=await l._.lead.findFirst({where:{verifyToken:t}});if(!i)return o.NextResponse.json({success:!1,message:"Invalid or expired verification link"},{status:400});if(i.verified)return o.NextResponse.json({success:!0,message:"Email already verified"});await l._.lead.update({where:{id:i.id},data:{verified:!0,verifyToken:null}}),await l._.event.create({data:{leadId:i.id,type:"email_click",action:"verification_complete"}});let r="b2b"===i.segment?process.env.NOTIF_ID_WELCOME_EMAIL_B2B:process.env.NOTIF_ID_WELCOME_EMAIL_PLAYER,a="b2b"===i.segment?"Welcome to Last Prompt for Business":"Welcome to the Last Prompt Community";return await (0,p.L6)({notificationId:r||"",recipientEmail:i.email,subject:a,body:(0,p.oA)(i.name,i.segment)}),await l._.emailLog.create({data:{leadId:i.id,emailType:"b2b"===i.segment?"welcome_b2b":"welcome_player",subject:a,status:"sent"}}),await (0,p.L6)({notificationId:process.env.NOTIF_ID_NEW_LEAD_ALERT||"",recipientEmail:"littlehousefrance@gmail.com",subject:`New Verified Lead: ${i.name} (${i.segment})`,body:`<div style="font-family: Arial; padding: 20px;"><h2>New Verified Lead</h2><p><strong>Name:</strong> ${i.name}</p><p><strong>Email:</strong> ${i.email}</p><p><strong>Segment:</strong> ${i.segment}</p><p><strong>Interest:</strong> ${i.interest}</p><p><strong>Score:</strong> ${i.score}</p></div>`}),o.NextResponse.json({success:!0,message:"Email verified successfully"})}catch(e){return console.error("Verification error:",e),o.NextResponse.json({success:!1,message:"Verification failed"},{status:500})}}let m=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/verify/route",pathname:"/api/verify",filename:"route",bundlePath:"app/api/verify/route"},resolvedPagePath:"/home/ubuntu/last_prompt_marketing/nextjs_space/app/api/verify/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:g,serverHooks:f}=m,y="/api/verify/route";function x(){return(0,s.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:g})}},35970:(e,t,i)=>{i.d(t,{_:()=>a});let r=require("@prisma/client"),a=globalThis.prisma??new r.PrismaClient},55743:(e,t,i)=>{async function r({notificationId:e,recipientEmail:t,subject:i,body:r,isHtml:a=!0}){let n=process.env.NEXTAUTH_URL||"",s=n?new URL(n).hostname.split(".")[0]:"LastPrompt";try{let o=await fetch("https://apps.abacus.ai/api/sendNotificationEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deployment_token:process.env.ABACUSAI_API_KEY,app_id:process.env.WEB_APP_ID,notification_id:e,subject:i,body:r,is_html:a,recipient_email:t,sender_email:n?`noreply@${new URL(n).hostname}`:void 0,sender_alias:s})}),l=await o.json();return{success:l.success,disabled:l.notification_disabled}}catch(e){return console.error("Email send error:",e),{success:!1,error:e}}}function a(e,t){return`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 40px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #22d3ee; margin: 0; font-size: 28px;">LAST PROMPT</h1>
        <p style="color: #6b7280; margin: 5px 0 0;">Verify Your Email</p>
      </div>
      <div style="background: #111827; padding: 30px; border-radius: 8px; border-left: 4px solid #22d3ee;">
        <p style="margin: 0 0 20px;">Hi ${e},</p>
        <p style="margin: 0 0 20px;">Thank you for joining Last Prompt! Please verify your email address to complete your registration and start receiving updates.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${t}" style="background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%); color: #000; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">Verify Email Address</a>
        </div>
        <p style="color: #9ca3af; font-size: 14px; margin: 20px 0 0;">This link expires in 24 hours. If you didn't sign up, you can safely ignore this email.</p>
      </div>
      <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">&copy; 2024 Last Prompt. All rights reserved.</p>
    </div>
  `}function n(e,t){let i="b2b"===t,r=i?{headline:"Transform Leadership Training",intro:"You're now part of an exclusive group of forward-thinking organizations exploring immersive simulation-based training.",bullets:["Case studies from successful implementations","Insights on measuring training ROI","Early access to corporate workshop materials","Direct line to schedule a personalized demo"],cta:"Schedule Your Demo",ctaUrl:"#calendar-placeholder"}:{headline:"Welcome to the Last Prompt Community",intro:"You're now part of our growing community of strategy enthusiasts ready to face the ultimate challenges.",bullets:["Exclusive playtest opportunities","Behind-the-scenes development updates","Community events and discussions","Early access to new features"],cta:"Join Our Discord",ctaUrl:"#discord-placeholder"};return`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; padding: 40px; border-radius: 12px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #22d3ee; margin: 0; font-size: 28px;">LAST PROMPT</h1>
        <p style="color: ${i?"#f97316":"#22c55e"}; margin: 5px 0 0;">${r.headline}</p>
      </div>
      <div style="background: #111827; padding: 30px; border-radius: 8px; border-left: 4px solid ${i?"#f97316":"#22c55e"};">
        <p style="margin: 0 0 20px;">Hi ${e},</p>
        <p style="margin: 0 0 20px;">${r.intro}</p>
        <p style="margin: 20px 0 10px; font-weight: 600;">What to expect:</p>
        <ul style="margin: 0 0 20px; padding-left: 20px;">
          ${r.bullets.map(e=>`<li style="margin: 8px 0;">${e}</li>`).join("")}
        </ul>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${r.ctaUrl}" style="background: linear-gradient(135deg, ${i?"#f97316 0%, #dc2626":"#22c55e 0%, #16a34a"} 100%); color: #fff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">${r.cta}</a>
        </div>
      </div>
      <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px;">
        <a href="#unsubscribe" style="color: #6b7280;">Unsubscribe</a> | &copy; 2024 Last Prompt
      </p>
    </div>
  `}i.d(t,{L6:()=>r,oA:()=>n,y5:()=>a})}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[885,609],()=>i(71551));module.exports=r})();